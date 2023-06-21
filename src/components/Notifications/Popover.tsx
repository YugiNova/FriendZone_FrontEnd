import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import { NotificationList, PopContent, Title} from "./styles"
import { useEffect, useState } from "react";
import { toggleDarkTheme, toggleLightTheme } from "../../redux/themeSlice";
import NotificaitionItem from "./NotificationItem";

interface Notification{
    user:string,
    content:string,
    time:string
}

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const [checked,setChecked] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [notifications,setNotifications] = useState<Notification[]>([
        {
            user: "User 1",
            content: "create new post",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post",
            time: "6 days ago"
        },
        {
            user: "User 1",
            content: "create new post",
            time: "6 days ago"
        }
    ])
    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Notification</Title>
            <NotificationList>
                {
                    notifications.map(item => {
                        return <NotificaitionItem notification={item}/>
                    })
                }
            </NotificationList>
        </PopContent>
    )
}

export default PopoverContent