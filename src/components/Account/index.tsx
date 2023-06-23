import { useSelector } from "react-redux";
import { Container, CustomButton } from "./styles";
import { getTheme } from "../../redux/selectors";
import { Avatar, Popover } from 'antd';
import PopoverContent from "./Popover";
import smallLogo from "../../assets/Small Logo.png"

const Account: React.FC = () => {
    const theme = useSelector(getTheme);

    return (
        <Container>
            <Popover color={theme.secondaryBackground} arrow={false} trigger="click" placement="bottomRight" content={<PopoverContent/>}>
                <CustomButton theme={theme}>
                    <Avatar src={smallLogo}/>
                </CustomButton>
            </Popover>
        </Container>
        
    );
};

export default Account;
