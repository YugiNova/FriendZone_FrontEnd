import { Container, LogoContainer, OptionsContainer, SearchContainer } from "./styles"
import fulllogo from '../../../assets/Full Logo.png'
import { useSelector } from "react-redux"
import { getTheme } from "../../../redux/selectors"
import ThemeToggle from "../../../components/ThemeToggle"
import Notification from "../../../components/Notifications"
import Messages from "../../../components/Messages"
import Account from "../../../components/Account"
import SearchBox from "./SearchBox"
import {ReactComponent as Logo} from "../../../assets/FriendZone.svg"

const Header:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <LogoContainer theme={theme}>
                <img src={fulllogo} alt="" />
            </LogoContainer>
            <SearchContainer theme={theme}>
                <SearchBox/>
            </SearchContainer>
            <OptionsContainer theme={theme}>
                <Notification/> 
                <Messages/>
                <ThemeToggle/> 
                <Account/>
            </OptionsContainer>
        </Container>
    )
}

export default Header