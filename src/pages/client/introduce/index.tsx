import { Outlet } from "react-router-dom"
import { Container, Content, NavItem, Navbar } from "./styles"
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"


const Introduce:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <Navbar theme={theme}>
                <h3>Introduce</h3>
                <NavItem theme={theme} to={'overview'}>Overview</NavItem>
                <NavItem theme={theme} to={'contact'}>Contact</NavItem>
                <NavItem theme={theme} to={'place'}>Place lived</NavItem>
                <NavItem theme={theme} to={'work_education'}>Work and education</NavItem>
                <NavItem theme={theme} to={'event'}>Life events</NavItem>
            </Navbar>
            <Content theme={theme}>
                <Outlet/> 
            </Content>
        </Container>
    )
}

export default Introduce