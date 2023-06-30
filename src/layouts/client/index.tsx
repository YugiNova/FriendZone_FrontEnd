import { Outlet, useParams } from "react-router-dom";
import {
    AffixCustom,
    ChatWrapper,
    Container,
    HeaderContainer,
    LeftSidebarContainer,
    MainContainer,
    RightSidebarConatainer,
    Wrapper,
} from "./styles";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Affix } from "antd";
import { useSelector } from "react-redux";
import { getChat, getTheme } from "../../redux/selectors";
import ChatBox from "../../components/ChatBox";
import { useEffect, useState } from "react";

const ClientLayout: React.FC = () => {
    const theme = useSelector(getTheme);
    const chat = useSelector(getChat);
    const { profile_id } = useParams();
    const [sidebar, setSidebar] = useState<boolean>(true);

    useEffect(() => {
        if (profile_id) {
            // console.log(profile_id);
            setSidebar(false)
        }
        else{
            setSidebar(true);
        }
    }, [profile_id]);

    return (
        <Container theme={theme}>
            <AffixCustom offsetTop={0}>
                <HeaderContainer>
                    <Header />
                    <LeftSidebarContainer show={sidebar?"block":"none"}>
                        <LeftSidebar />
                    </LeftSidebarContainer>
                    <RightSidebarConatainer  show={sidebar?"block":"none"}>
                        <RightSidebar />
                        <ChatWrapper>
                            {chat.map((item) => {
                                return <ChatBox user={item.user} />;
                            })}
                        </ChatWrapper>
                    </RightSidebarConatainer>
                </HeaderContainer>
            </AffixCustom>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </Container>
    );
};

export default ClientLayout;
