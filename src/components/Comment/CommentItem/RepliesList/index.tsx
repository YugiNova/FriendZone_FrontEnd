import CommentItem from "..";
import Comment from "../..";
import { Container } from "../../../ThemeToggle/styles";

interface Props {
    replies: Comment[];
}

const RepliesList: React.FC<Props> = ({ replies }) => {
    return (
        <Container>
            {
                replies.map(item => {
                    return(
                        <CommentItem comment={item}/>
                    )
                })
            }
        </Container>
    );
};

export default RepliesList;
