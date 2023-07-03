import { CaretLeftOutlined, UserOutlined } from "@ant-design/icons";
import { BiLike, BiCommentDetail, BiShareAlt } from "react-icons/bi";
import {
    AcitonWrapper,
    ActionButton,
    AvatarCustom,
    Container,
    Content,
    Count,
    CountWrapper,
    Header,
    MediaWrapper,
    Name,
    Time,
} from "./styles";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { AiTwotoneLike } from "react-icons/ai";
import { useState } from "react";
import { Image } from "antd";
import Comment from "../Comment";
import PostModal from "../PostModal";
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const Post: React.FC = () => {
    const theme = useSelector(getTheme);
    const [like, setLike] = useState(false);
    const [open, setOpen] = useState<boolean>(false)

    const onLike = () => {
        setLike(!like);
    };

    const showPost = () => {
        setOpen(true)
    }

    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <Container theme={theme}>
            <Header theme={theme}>
                <AvatarCustom theme={theme} size={45} icon={<UserOutlined />} />
                <Name theme={theme}>Yugi Nova</Name>
                <Time theme={theme}>3 hour ago</Time>
            </Header>
            <Content
                ellipsis={{ rows: 3, expandable: true, symbol: "see more" }}
                theme={theme}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
                faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            </Content>
            <MediaWrapper theme={theme}>
                <ImageGallery showThumbnails={false} items={images}/>
            </MediaWrapper>
            <CountWrapper theme={theme}>
                <Count theme={theme}>
                    <AiTwotoneLike />
                    230
                </Count>
                <Count theme={theme}>230 comment</Count>
            </CountWrapper>
            <AcitonWrapper theme={theme}>
                <ActionButton onClick={onLike} liked={like} theme={theme}>
                    <AiTwotoneLike /> Like
                </ActionButton>
                <ActionButton onClick={showPost} theme={theme}>
                    <BiCommentDetail /> Comment
                </ActionButton>
                <ActionButton theme={theme}>
                    <BiShareAlt /> Share
                </ActionButton>
                <PostModal open={open} setOpen={setOpen}/>
            </AcitonWrapper>
            
        </Container>
    );
};

export default Post;
