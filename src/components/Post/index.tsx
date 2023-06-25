import { UserOutlined } from "@ant-design/icons";
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

const Post: React.FC = () => {
    const theme = useSelector(getTheme);
    const [like, setLike] = useState(false);

    const onLike = () => {
        setLike(!like);
    };

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
                <Image
                    width={"100%"}
                    src="https://plus.unsplash.com/premium_photo-1686644273941-435b3b48d4b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1116&q=80"
                />
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
                <ActionButton theme={theme}>
                    <BiCommentDetail /> Comment
                </ActionButton>
                <ActionButton theme={theme}>
                    <BiShareAlt /> Share
                </ActionButton>
            </AcitonWrapper>
        </Container>
    );
};

export default Post;
