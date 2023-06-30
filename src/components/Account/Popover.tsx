import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import { OptionItem, PopContent, Title} from "./styles"
import { MdPowerSettingsNew,MdSettings,MdFace6 } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const navigate = useNavigate()

    const onLogOut = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    const viewProfile = () => {
        navigate("/yugi.nova")
    }

    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Account</Title>
            <OptionItem onClick={viewProfile} theme={theme}><MdFace6/>View your profiles</OptionItem>
            <OptionItem theme={theme}><MdSettings/>Setting</OptionItem>
            <OptionItem onClick={onLogOut} theme={theme}><MdPowerSettingsNew/>Sign out</OptionItem>
        </PopContent>
    )
}

export default PopoverContent