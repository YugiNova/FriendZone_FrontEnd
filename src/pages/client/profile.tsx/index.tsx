import { useDispatch, useSelector } from "react-redux";
import {
    ActionButton,
    AvatarCustom,
    Body,
    Container,
    Count,
    Cover,
    Header,
    LeftWrapper,
    Name,
    NavBar,
    NavItem,
    NickName,
    RighWrapper,
    Wrapper,
} from "./styles";
import { getCurrentUser, getProfile, getTheme } from "../../../redux/selectors";
import { AiOutlineUserAdd, AiOutlineEye } from "react-icons/ai";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProfile, setOwner } from "../../../redux/profileSlice";
import { AppDispatch } from "../../../redux/store";
import avatar_male from "../../../assets/avatar_male.png";
import avatar_female from "../../../assets/avatar_female.png";

const Profile: React.FC = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch<AppDispatch>();
    const { slug } = useParams();
    const profile = useSelector(getProfile);
    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
        if (slug) {
            dispatch(fetchProfile(slug));
        }
        if (profile.data.slug == currentUser.slug) {
            dispatch(setOwner(true));
        }
    }, []);

    useEffect(() => {
        if (profile.data.slug == currentUser.slug) {
            dispatch(setOwner(true));
        }
    }, [profile.data.slug]);

    const coverImage = (status: string) => {
        if (status == "loading") {
            return <div className="default"></div>;
        } else if (
            status == "success" &&
            profile.data.profile?.cover_image_url
        ) {
            return (
                <img src="https://images.unsplash.com/photo-1523867574998-1a336b6ded04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            );
        } else {
            return <div className="default"></div>;
        }
    };

    const getAvatar = (status: string) => {
        if (status == "loading") {
            return avatar_male;
        } else {
            if (profile.data.profile?.gender == "male") {
                return avatar_male;
            } else {
                return avatar_female;
            }
        }
    };

    return (
        <Container>
            <Header theme={theme}>
                <Cover>{coverImage(profile.status)}</Cover>
                <Wrapper theme={theme}>
                    <AvatarCustom
                        theme={theme}
                        src={getAvatar(profile.status)}
                        size={144}
                    />
                    <LeftWrapper theme={theme}>
                        <Name theme={theme}>{profile.data.display_name}</Name>
                        <NickName theme={theme}>
                            {profile.data.nickname
                                ? `(${profile.data.nickname})`
                                : ""}
                        </NickName>
                        <Count theme={theme}>
                            {profile.data.profile?.friends_count}{" "}
                            {profile.data.profile?.friends_count &&
                            profile.data.profile?.friends_count > 1
                                ? "friends"
                                : "friend"}{" "}
                            | {profile.data.profile?.followers_count}{" "}
                            {profile.data.profile?.followers_count &&
                            profile.data.profile?.followers_count > 1
                                ? "followers"
                                : "follower"}
                        </Count>
                    </LeftWrapper>
                    <RighWrapper theme={theme}>
                        {profile.isOwner ? (
                            <>
                                <ActionButton theme={theme}>
                                    Change Avatar
                                </ActionButton>
                                <ActionButton theme={theme}>
                                    Change Cover
                                </ActionButton>
                            </>
                        ) : (
                            <>
                                <ActionButton theme={theme}>
                                    <AiOutlineUserAdd />
                                    Add friends
                                </ActionButton>
                                <ActionButton theme={theme}>
                                    <AiOutlineEye />
                                    Follow
                                </ActionButton>
                            </>
                        )}
                    </RighWrapper>
                </Wrapper>
                <NavBar theme={theme}>
                    <NavItem theme={theme} to={`/${slug}/timeline`}>
                        Timeline
                    </NavItem>
                    <NavItem theme={theme} to={`/${slug}/introduce`}>
                        Introduce
                    </NavItem>
                    <NavItem theme={theme} to={"/"}>
                        Friends
                    </NavItem>
                    <NavItem theme={theme} to={"/"}>
                        Photos
                    </NavItem>
                    <NavItem theme={theme} to={"/"}>
                        Videos
                    </NavItem>
                </NavBar>
            </Header>
            <Body>
                <Outlet />
            </Body>
        </Container>
    );
};

export default Profile;
