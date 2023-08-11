import { useDispatch, useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { MdNotifications } from "react-icons/md";
import {
    getCurrentUser,
    getNotifications,
    getTheme,
} from "../../redux/selectors";
import { useEffect } from "react";
import { Badge, Popover } from "antd";
import PopoverContent from "./Popover";
import { AppDispatch } from "../../redux/store";
import { fetchNotifications, hotPushNotifications } from "../../redux/notificationSlice";
import socket from "../../socket";
import { toast } from "react-toastify";

const Notification: React.FC = () => {
    const theme = useSelector(getTheme);
    const dispatch = useDispatch<AppDispatch>();
    const notifications = useSelector(getNotifications);
    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
        dispatch(fetchNotifications());
        socket.on('notifications', (notification) => {
            console.log(notification);
            dispatch(hotPushNotifications(notification))
        });
    }, []);

    return (
        <Container>
            <Popover
                color={theme.secondaryBackground}
                arrow={false}
                trigger="click"
                placement="bottomRight"
                content={<PopoverContent />}
            >
                <Badge count={notifications.total}>
                    <CustomButton theme={theme}>
                        <MdNotifications />
                    </CustomButton>
                </Badge>
            </Popover>
        </Container>
    );
};

export default Notification;
