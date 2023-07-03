import Comment from "../Comment";
import Post from "./Post";
import { CommentContainer, Container, CustomModal, Media, PostContainer, PostWrapper } from "./styles";
import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const PostModal: React.FC<Props> = ({ open, setOpen }) => {
    const onClose = () => {
        setOpen(!open);
    };
    const [media,setMedia] = useState<boolean>(false)
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
        <CustomModal
            width={media?"auto": "35rem"}
            footer={null}
            open={open}
            onCancel={onClose}
        >
            <Container layout={media?"1fr": "0"}>
                <Media>
                    <ImageGallery showThumbnails={false} items={images} />
                </Media>
                <PostWrapper>
                    <PostContainer>
                        <Post />
                    </PostContainer>
                    <CommentContainer>
                        <Comment />
                    </CommentContainer>
                </PostWrapper>
            </Container>
        </CustomModal>
    );
};

export default PostModal;
