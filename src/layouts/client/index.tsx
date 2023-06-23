import {Outlet} from 'react-router-dom'
import { Container, HeaderContainer, LeftSidebarContainer, MainContainer, RightSidebarConatainer } from './styles'
import Header from './Header'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Affix } from 'antd'
import { useSelector } from 'react-redux'
import { getTheme } from '../../redux/selectors'


const ClientLayout:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            {/* <Affix offsetTop={0}>
                <Header/>
            </Affix> */}
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <LeftSidebarContainer>
                <LeftSidebar/>
            </LeftSidebarContainer>
            <MainContainer>
                <Outlet/>
            </MainContainer>
            <RightSidebarConatainer>
                <RightSidebar/>
            </RightSidebarConatainer>
            
        </Container>
    )
}

export default ClientLayout