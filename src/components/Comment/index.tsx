import { useState } from "react";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import { Container } from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";

interface Comment {
    user: string;
    content: string;
    replies?: Comment[];
}

const Comment: React.FC = () => {
    const theme = useSelector(getTheme)
    const [comments, setComments] = useState<Comment[]>([
        {
            user: "Yugi Nova",
            content: "Lorem Ipsum is simply dummy text",
            replies: [
                {
                    user: "Nova Yugi",
                    content: "This is reply 1",
                    replies: [
                        {
                            user: "Nova Yugi",
                            content:
                                "This is reply 1",
                        },
                    ],
                },
                {
                    user: "Nova Yugi",
                    content:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                },
            ],
        },
        {
            user: "Yuginovanaic",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            user: "Yugi Nova",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            replies: [
                {
                    user: "Nova Yugi",
                    content: "This is reply 4",
                    replies: [
                        {
                            user: "Nova Yugi",
                            content: "This is reply 1",
                        },
                        {
                            user: "Nova Yugi",
                            content:
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <Container theme={theme}>
            <CommentInput/>
            {comments.map((item) => {
                return <CommentItem comment={item} />;
            })}
        </Container>
    );
};

export default Comment;
