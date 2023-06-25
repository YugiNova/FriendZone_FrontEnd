import { useSelector } from "react-redux";
import { Activity, ActivityButton, AvatarCustom, Container, CustomSelect, Footer, Header, Name, OptionItem, PostButton, TextAreaCustom } from "./styles";
import { getTheme } from "../../redux/selectors";
import { UserOutlined } from "@ant-design/icons";
import { MdPublic, MdSupervisorAccount, MdFace, MdInsertPhoto,MdTagFaces,MdPostAdd } from "react-icons/md";
import { Select } from "antd";
const { Option } = Select;

const CreatePost: React.FC = () => {
    const theme = useSelector(getTheme);
    // const options = [
    //     {
    //         value: 1,
    //         label: <OptionItem><MdPublic/>Public asdasdadasd</OptionItem>
    //     },
    //     {
    //         value: 2,
    //         label: <OptionItem><MdSupervisorAccount/>Only Friends asdasdadadasd</OptionItem>
    //     },
    //     {
    //         value: 3,
    //         label: <OptionItem><MdFace/>Only me asdadadasdasd</OptionItem>
    //     },
    // ]

    return (
        <Container theme={theme}>
            <Header>
                <AvatarCustom size={45} icon={<UserOutlined />} />
                <Name theme={theme}>Yugi Nova</Name>
                <CustomSelect
                    defaultValue={1}
                    style={{ width: 'auto', height: 'auto'}}
                    bordered={false}
                    theme={theme}
                >
                    <Option value={1} label="Public">
                        <OptionItem>
                            <MdPublic/>Public
                            <div>Every one will see this post</div>
                        </OptionItem>
                    </Option>
                    <Option value={2} label="Only Friends">
                        <OptionItem>
                            <MdSupervisorAccount/>Only Friends
                            <div>Only your friends can see this post</div>
                        </OptionItem>
                    </Option>
                    <Option value={3} label="Only me">
                        <OptionItem>
                            <MdFace/>Only me
                            <div>Only you can see your post</div>
                        </OptionItem>
                    </Option>
                </CustomSelect>
            </Header>
            <TextAreaCustom bordered={false} theme={theme} placeholder="What's on your mind?"/>
            <Footer>
                <Activity>
                    <ActivityButton theme={theme}><MdInsertPhoto/>Photo/Video</ActivityButton>
                    <ActivityButton theme={theme}><MdTagFaces/>Tag your friends</ActivityButton>
                </Activity>
                <PostButton theme={theme}>Create Post</PostButton>
            </Footer>
        </Container>
    );
};

export default CreatePost;
