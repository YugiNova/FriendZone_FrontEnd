import { Outlet } from "react-router-dom";
import {
    AffixCustom,
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
import { getTheme } from "../../redux/selectors";

const ClientLayout: React.FC = () => {
    const theme = useSelector(getTheme);

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
