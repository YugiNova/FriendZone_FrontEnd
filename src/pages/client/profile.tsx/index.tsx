import { useSelector } from "react-redux";
import { ActionButton, AvatarCustom, Body, Container, Count, Cover, Header, LeftWrapper, Name, NavBar, NavItem, NickName, RighWrapper, Wrapper } from "./styles";
import { getTheme } from "../../../redux/selectors";
import { AiOutlineUserAdd,AiOutlineEye } from "react-icons/ai";
import { Outlet } from "react-router-dom";

const Profile: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container>
            <Header theme={theme}>
                <Cover><img src="https://images.unsplash.com/photo-1523867574998-1a336b6ded04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/></Cover>
                
                <Wrapper theme={theme}>
                <AvatarCustom  theme={theme} src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80' size={144}/>
                    <LeftWrapper theme={theme}>
                        <Name theme={theme}>Yugi Nova</Name>
                        <NickName theme={theme}>(The Founder)</NickName>
                        <Count theme={theme}>330 friends | 330 followers</Count>
                    </LeftWrapper>
                    <RighWrapper theme={theme}>
                        <ActionButton theme={theme}><AiOutlineUserAdd/>Add friends</ActionButton>
                        <ActionButton theme={theme}><AiOutlineEye/>Follow</ActionButton>
                    </RighWrapper>
                </Wrapper>
                <NavBar theme={theme}>
                    <NavItem theme={theme} to={"/yugi.nova/timeline"}>Timeline</NavItem>
                    <NavItem theme={theme} to={"/yugi.nova/introduce"}>Introduce</NavItem>
                    <NavItem theme={theme} to={"/"}>Friends</NavItem>
                    <NavItem theme={theme} to={"/"}>Photos</NavItem>
                    <NavItem theme={theme} to={"/"}>Videos</NavItem>
                </NavBar>
            </Header>
            <Body>
                <Outlet/>
            </Body>
        </Container>
    );
};

export default Profile;
