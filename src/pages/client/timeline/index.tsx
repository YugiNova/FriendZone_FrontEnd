import { useSelector } from "react-redux";
import {
    About,
    Container,
    Event,
    InfoItem,
    Introduce,
    LeftWrapper,
    PhotoList,
    Photos,
    PostWrapper,
    Title,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import CreatePost from "../../../components/CreatePost";
import Post from "../../../components/Post";
import { AiFillHome } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import PhotoItem from "../../../components/PhotoItem";
import { Timeline as EventLine } from "antd";

const Timeline: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container theme={theme}>
            <LeftWrapper>
                <Introduce theme={theme}>
                    <Title theme={theme}>Introduce</Title>
                    <About theme={theme}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi nulla dolor, ornare at commodo non, feugiat non
                        nisi. Phasellus faucibus mollis pharetra. Proin blandit
                        ac massa sed rhoncus
                    </About>
                    <InfoItem theme={theme}>
                        <AiFillHome />
                        Ho Chi Minh City
                    </InfoItem>
                    <InfoItem theme={theme}>
                        <MdSchool />
                        Ton Duc Thang Univerity
                    </InfoItem>
                    <InfoItem theme={theme}>
                        <FaBirthdayCake />
                        30/02/1999
                    </InfoItem>
                </Introduce>
                <Photos theme={theme}>
                    <Title theme={theme}>Photos</Title>
                    <PhotoList>
                        <PhotoItem src="https://images.unsplash.com/photo-1688008926300-229f36ad49f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1688019984360-50d40dfa955a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1509978778156-518eea30166b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80" />
                        <PhotoItem src="https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" />
                        <PhotoItem src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
                    </PhotoList>
                </Photos>
                <Event theme={theme}>
                    <Title theme={theme}>Event</Title>
                    <EventLine
                        mode="alternate"
                        items={[
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children: "Create a services site ",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children:
                                    "Solve initial network problems",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children: "Technical testin",
                            },
                            {
                                color: theme.primaryColor,
                                label:"2015-09-01",
                                children:
                                    "Network problems being solved",
                            },
                        ]}
                    />
                </Event>
            </LeftWrapper>
            <PostWrapper theme={theme}>
                <CreatePost />
                <Post />
            </PostWrapper>
        </Container>
    );
};

export default Timeline;
