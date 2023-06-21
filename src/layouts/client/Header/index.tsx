import { Container, LogoContainer, OptionsContainer, SearchContainer } from "./styles"
import fulllogo from '../../../assets/Full Logo.png'
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"
import ThemeToggle from "../../../components/ThemeToggle"
import Notification from "../../../components/Notifications"

const Header:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <LogoContainer theme={theme}>
                <img src={fulllogo}/>
            </LogoContainer>
            <SearchContainer theme={theme}>

            </SearchContainer>
            <OptionsContainer theme={theme}>
                <Notification/> 
                <ThemeToggle/> 
            </OptionsContainer>
        </Container>
    )
}

export default Header