import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import { OptionItem, PopContent, Title} from "./styles"
import { MdPowerSettingsNew,MdSettings,MdFace6 } from "react-icons/md";

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Account</Title>
            <OptionItem theme={theme}><MdFace6/>View your profiles</OptionItem>
            <OptionItem theme={theme}><MdSettings/>Setting</OptionItem>
            <OptionItem theme={theme}><MdPowerSettingsNew/>Sign out</OptionItem>
        </PopContent>
    )
}

export default PopoverContent