import { useSelector } from "react-redux";
import { Container, IconWrapper, MenuItem } from "./styles";
import { getTheme } from "../../../../redux/selectors";
import { MdNewspaper, MdFace } from "react-icons/md";

const Menus: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container theme={theme}>
            <MenuItem theme={theme} to={"/"}>
                <IconWrapper theme={theme}>
                    <MdNewspaper />
                </IconWrapper>
                Newsfeed
            </MenuItem>
            <MenuItem theme={theme} to={"/"}>
                <IconWrapper theme={theme}>
                    <MdFace />
                </IconWrapper>
                Your profile
            </MenuItem>
        </Container>
    );
};

export default Menus;
