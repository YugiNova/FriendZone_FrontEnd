import { IoCameraSharp, IoPeople, IoSend } from "react-icons/io5";
import { ActionItem, ActionWrapper, AvatarCustom, Container, InputWrapper, SendButton, TextAreaCustom } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../../redux/selectors";

const CommentInput:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container theme={theme}>
            <AvatarCustom size={32} theme={theme}/>
            <InputWrapper theme={theme}>
                <TextAreaCustom placeholder="Write your comment..." bordered={false} autoSize theme={theme}/>
                <ActionWrapper theme={theme}>
                    <ActionItem theme={theme}><IoCameraSharp/></ActionItem>
                    <ActionItem theme={theme}><IoPeople/></ActionItem>
                    <ActionItem theme={theme}></ActionItem>
                </ActionWrapper>
                <SendButton theme={theme}>
                    <button>
                        <IoSend/>
                    </button>
                </SendButton>
            </InputWrapper>
        </Container>
    )
}

export default CommentInput