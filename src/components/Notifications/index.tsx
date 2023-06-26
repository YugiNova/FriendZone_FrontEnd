import { useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { MdNotifications } from "react-icons/md";
import { getTheme } from "../../redux/selectors";
import { Badge, Popover } from 'antd';
import PopoverContent from "./Popover";

const Notification: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container>
            <Popover color={theme.secondaryBackground} arrow={false} trigger="click" placement="bottomRight" content={<PopoverContent/>}>
                <Badge count={4}>
                    <CustomButton theme={theme}>
                        <MdNotifications />
                    </CustomButton>
                </Badge>
            </Popover>
        </Container>
        
    );
};

export default Notification;
