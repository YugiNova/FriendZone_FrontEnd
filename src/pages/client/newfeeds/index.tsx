import CreatePost from "../../../components/CreatePost"
import PostLoading from "../../../components/Loading/PostLoading"
import Post from "../../../components/Post"
import { Container } from "./styles"


const Newfeeds:React.FC = () => {

    return(
        <Container>
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
            <PostLoading/>
        </Container>
    )
}

export default Newfeeds