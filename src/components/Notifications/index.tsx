import { useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { MdNotifications } from "react-icons/md";
import { getTheme } from "../../redux/selectors";
import { Popover } from 'antd';
import PopoverContent from "./Popover";

const Notification: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container>
            <Popover color={theme.secondaryBackground} arrow={false} trigger="click" placement="bottom" content={<PopoverContent/>}>
                <CustomButton theme={theme}>
                    <MdNotifications />
                </CustomButton>
            </Popover>
        </Container>
        
    );
};

export default Notification;
