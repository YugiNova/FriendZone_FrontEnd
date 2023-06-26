import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import { AvatarCustom, Container, Exit, Footer, Header, InputCustom, LeftSide, MessageList, Name, RightSide, SendButton } from "./styles"
import { IoSend } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import {useState} from 'react'
import ChatItem from "./ChatItem";
import { removeChat } from "../../redux/chatSlice";

export interface Message {
    text:string
    user:boolean
}

interface Props {
    user:string
}

const ChatBox:React.FC<Props> = ({user}) => {
    const theme = useSelector(getTheme)
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hi",
            user: true
        },
        {
            text: "Hello",
            user: true
        },
        {
            text: "What are you doing",
            user: true
        },
        {
            text: "Somthing...",
            user: false
        },
        {
            text: "asdasdadadasdasd",
            user: true
        },
        {
            text: "asdadasdasd",
            user: false
        },
        {
            text: "asdadasdasd",
            user: false
        },
        {
            text: "asdadasdasd",
            user: false
        },
    ])
    const dispatch = useDispatch()

    const onClose = () => {
        dispatch(removeChat({user}))
    }

    return(
        <Container theme={theme}>
            <Header theme={theme}>
                <LeftSide>
                    <AvatarCustom size={32}/>
                    <Name>{user}</Name>
                </LeftSide>
                <RightSide>
                    <Exit onClick={onClose}><GrClose/></Exit>
                </RightSide>
            </Header>
            <MessageList theme={theme}>
                {
                    messages.map(item => {
                        return <ChatItem message={item}/>
                    })
                }
            </MessageList>
            <Footer theme={theme}>
                <InputCustom autoSize bordered={false} placeholder="Aa" theme={theme}/>
                <SendButton theme={theme}><IoSend/></SendButton>
            </Footer>
        </Container>
    )
}

export default ChatBox