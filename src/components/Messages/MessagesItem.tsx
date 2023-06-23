import { useSelector } from 'react-redux'
import smalllogo from '../../assets/Small Logo.png'    
import {Avatar, AvatarWrapper,  Content, Name, NotificationWrapper, Time } from './styles'
import { getTheme } from '../../redux/selectors'

interface Props {
    messages:any
}

const NotificaitionItem:React.FC<Props> = ({messages}) => {
    const theme = useSelector(getTheme)

    return(
        <NotificationWrapper theme={theme}>
            <AvatarWrapper><Avatar src={smalllogo}/></AvatarWrapper>
            <Name>{messages.user}</Name>
            <Content ellipsis={true} theme={theme}>{messages.content}</Content>
            <Time theme={theme}>{messages.time}</Time>
        </NotificationWrapper>
    )
}

export default NotificaitionItem