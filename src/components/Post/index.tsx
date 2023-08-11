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
import { getCurrentUser, getTheme } from "../../redux/selectors";
import { AiTwotoneLike } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Dropdown, Image } from "antd";
import Comment from "../Comment";
import PostModal from "../PostModal";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { PostType } from "../../interfaces/ComponentProps";
import moment from "moment";
import avatar_male from "../../assets/avatar_male.png";
import avatar_female from "../../assets/avatar_female.png";
import { useInView } from "react-intersection-observer";
import socket from "../../socket";
import {
    FacebookSelector,
    ReactionBarSelector,
    ReactionCounter,
} from "@charkour/react-reactions";
import { useNavigate } from "react-router-dom";

interface Props {
    post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
    const theme = useSelector(getTheme);
    const [like, setLike] = useState(false);
    const [open, setOpen] = useState<boolean>(false);
    const [images, setImages] = useState<any[]>([]);
    const { ref, inView } = useInView();
    const [reaction, setReaction] = useState<string>("");
    const currentUser = useSelector(getCurrentUser);
    const navigate = useNavigate()

    useEffect(() => {
        if (post.images) {
            const newImages = post.images.map((item) => {
                return {
                    original: item.image_url,
                    thumbnail: item.image_url,
                };
            });
            setImages(newImages);
        }
    }, []);

    useEffect(() => {
        if (inView) {
            socket.emit("postInViewport", post.id);
        }
    }, [inView]);

    const onReaction = (reaction: string) => {
        switch (reaction) {
            case "like":
                return (
                    <ActionButton className="like" theme={theme}>
                        <AiTwotoneLike /> Like
                    </ActionButton>
                );
            case "haha":
                return (
                    <ActionButton className="haha" theme={theme}>
                        <AiTwotoneLike /> Haha
                    </ActionButton>
                );
            case "sad":
                return (
                    <ActionButton className="sad" theme={theme}>
                        <AiTwotoneLike /> Sad
                    </ActionButton>
                );
            case "angry":
                return (
                    <ActionButton className="angry" theme={theme}>
                        <AiTwotoneLike /> Angry
                    </ActionButton>
                );
            default:
                return (
                    <ActionButton liked={like} theme={theme}>
                        <AiTwotoneLike /> Like
                    </ActionButton>
                );
        }
    };

    const showPost = () => {
        setOpen(true);
    };

    const calculateTime = (time: string) => {
        let diffTime = moment.duration(moment().diff(moment(time))).clone();
        let diffTimeAsMinute = moment
            .duration(moment().diff(moment(time)))
            .asMinutes();

        if (diffTimeAsMinute < 60) {
            return Math.round(diffTime.asMinutes()).toString() + " mins";
        } else if (diffTimeAsMinute < 60 * 24) {
            return Math.round(diffTime.asHours()).toString() + " hours";
        } else {
            return Math.round(diffTime.asDays()).toString() + " days";
        }
    };

    const getAvatar = (url?: string, gender?: string) => {
        if (url) {
            return url;
        } else {
            if (gender == "male") {
                return avatar_male;
            } else {
                return avatar_female;
            }
        }
    };

    return (
        <Container ref={ref} theme={theme}>
            <Header theme={theme}>
                <AvatarCustom
                    onClick={()=>{navigate(`/${post.author.slug}`)}}
                    theme={theme}
                    size={45}
                    src={getAvatar(post.author.avatar_url, post.author.gender)}
                />
                <Name onClick={()=>{navigate(`/${post.author.slug}`)}} theme={theme}>{post.author?.display_name}</Name>
                <Time theme={theme}>{calculateTime(post.created_at)} ago</Time>
            </Header>
            <Content
                ellipsis={{ rows: 3, expandable: true, symbol: "see more" }}
                theme={theme}
            >
                {post.content}
            </Content>
            <MediaWrapper theme={theme}>
                {images && images.length > 0 ? (
                    <ImageGallery showThumbnails={false} items={images} />
                ) : (
                    ""
                )}
            </MediaWrapper>
            <CountWrapper theme={theme}>
                <Count theme={theme}>
                    <AiTwotoneLike />
                    {/* <ReactionCounter reactions={[
                        'haha',
                    ]}/> */}
                    {post.reactions_count}
                </Count>
                <Count theme={theme}>{post.comments_count} comment</Count>
            </CountWrapper>
            <AcitonWrapper theme={theme}>
                <Dropdown
                    trigger={["click"]}
                    placement="top"
                    dropdownRender={() => (
                        <FacebookSelector
                            onSelect={(e) => {
                                setReaction(e);
                            }}
                            reactions={["like", "haha", "sad", "angry"]}
                        />
                    )}
                >
                    {onReaction(reaction)}
                </Dropdown>

                <ActionButton onClick={showPost} theme={theme}>
                    <BiCommentDetail /> Comment
                </ActionButton>
                {/* <ActionButton theme={theme}>
                    <BiShareAlt /> Share
                </ActionButton> */}
                <PostModal open={open} setOpen={setOpen} post={post}/>
            </AcitonWrapper>
        </Container>
    );
};

export default Post;
