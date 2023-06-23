import { useSelector } from "react-redux"
import { Avatar, AvatarWrapper, Circle, Name, Status, UserItem } from "./styles"
import { getTheme } from "../../../redux/selectors"
import smalllogo from  "../../../assets/Small Logo.png"
import { useState } from "react"


const SidebarItem:React.FC = () => {
    const theme = useSelector(getTheme)
    const [online, setOnline] = useState(true)

    return(
        <UserItem theme={theme}>
            <AvatarWrapper theme={theme}><Avatar src={smalllogo} theme={theme}/></AvatarWrapper>
            <Name theme={theme}>User name 1</Name>
            <Status theme={theme}>{online ?<Circle></Circle>: "4m"}</Status>
        </UserItem>
    )
}

export default SidebarItem