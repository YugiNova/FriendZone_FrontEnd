import { Outlet } from "react-router-dom";
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

const ClientLayout: React.FC = () => {
    const theme = useSelector(getTheme);
    const chat = useSelector(getChat)

    return (
        <Container theme={theme}>
            <AffixCustom offsetTop={0}>
                <HeaderContainer>
                    <Header />
                    <LeftSidebarContainer>
                        <LeftSidebar />
                    </LeftSidebarContainer>
                    <RightSidebarConatainer>
                        <RightSidebar />
                        <ChatWrapper>
                            {
                                chat.map(item => {
                                    return <ChatBox user={item.user}/>
                                })
                            }
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
