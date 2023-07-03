import { useSelector } from "react-redux";
import {
    Action,
    ActionWrapper,
    AvatarCusom,
    ChildrenLine,
    ChildrenWrapper,
    Container,
    Content,
    ContentWrapper,
    CurrentLine,
    MainWrapper,
    Name,
    ParentLine,
    ReplyWrapper,
    ShowMore,
    Time,
    Wrapper,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import Comment from "..";
import RepliesList from "./RepliesList";
import CommentInput from "../CommentInput";
import { useState } from 'react'

interface Props {
    comment: Comment;
}

const CommentItem: React.FC<Props> = ({ comment }) => {
    const theme = useSelector(getTheme);
    const [replyInput,setReplyInput] = useState<boolean>(false)

    const showReplies = (replies: Comment[] | undefined) => {
        console.log(replies);
        if (replies) {
            replies.map((item) => {
                return <CommentItem comment={item} />;
            });
        } else {
            return "asd";
        }
    };

    const onReply = () => {
        setReplyInput(true)
    }

    return (
        <Container theme={theme}>
            {/* <ParentLine  display={comment.replies?"block":"none"}></ParentLine> */}
            <MainWrapper>
                <AvatarCusom size={32} />
                <ContentWrapper theme={theme}>
                    <Wrapper theme={theme}>
                        <Name theme={theme}>{comment.user}</Name>
                        <Content theme={theme}>{comment.content}</Content>
                    </Wrapper>
                </ContentWrapper>
                <ActionWrapper theme={theme}>
                    <Action theme={theme}>Like</Action>
                    <Action onClick={onReply} theme={theme}>Reply</Action>
                    <Time theme={theme}>2 hours</Time>
                </ActionWrapper>
                
                {/* <CurrentLine></CurrentLine>
                <ChildrenLine display={comment.replies?"block":"none"}></ChildrenLine> */}
            </MainWrapper>
            <ChildrenWrapper theme={theme}>
                {comment.replies ? (
                    <RepliesList replies={comment.replies} />
                ) : (
                    ""
                )}
            </ChildrenWrapper>
            <ReplyWrapper theme={theme}>
                {replyInput?<CommentInput/>:""}
            </ReplyWrapper>
        </Container>
    );
};

export default CommentItem;
