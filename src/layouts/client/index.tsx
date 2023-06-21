import {Outlet} from 'react-router-dom'
import { Container, HeaderContainer, LeftSidebarContainer, MainContainer, RightSidebarConatainer } from './styles'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Affix } from 'antd'


const ClientLayout:React.FC = () => {
    return(
        <Container>
            {/* <Affix offsetTop={0}>
                <Header/>
            </Affix> */}
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <LeftSidebarContainer>
                <LeftSidebar/>
            </LeftSidebarContainer>
            <RightSidebarConatainer>
                <RightSidebar/>
            </RightSidebarConatainer>
            <MainContainer>
                <Outlet/>
            </MainContainer>
            
        </Container>
    )
}

export default ClientLayout