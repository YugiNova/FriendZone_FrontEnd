import { useSelector } from 'react-redux'
import smalllogo from '../../assets/Small Logo.png'    
import {Avatar, AvatarWrapper,  Content, NotificationWrapper, Time } from './styles'
import { getTheme } from '../../redux/selectors'

interface Props {
    notification:any
}

const NotificaitionItem:React.FC<Props> = ({notification}) => {
    const theme = useSelector(getTheme)

    return(
        <NotificationWrapper theme={theme}>
            <AvatarWrapper><Avatar src={smalllogo}/></AvatarWrapper>
            <Content ellipsis={{ rows: 2, expandable:false}} theme={theme}><span>{notification.user}</span> {notification.content}</Content>
            <Time theme={theme}>{notification.time}</Time>
        </NotificationWrapper>
    )
}

export default NotificaitionItem