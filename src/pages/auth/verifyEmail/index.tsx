import { useSelector } from "react-redux";
import {
    Container,
    Content,
    ContentWrapper,
    CustomButton,
    Logo,
    Title,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import logo from "../../../assets/Full Logo.png";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

const VerifyEmail = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const onSendMail = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSend(true);
        }, 5000);
    };

    return (
        <Container>
            <Logo>
                <img src={logo} />
            </Logo>
            <ContentWrapper theme={theme}>
                <Title>Verify your email address</Title>
                <Content>
                    {
                        !send?
                        `Thank you for signing up for our service.<br> Just one more step
                        to completely register your FriendZone account. Please click
                        button below to send a verify email to your email you
                        already registry`:
                        `We just send a verificaition email to your
                        email address. Please check your email and click the link we
                        provided to complete verify your email. If you don't receive
                        any email, you can click button below to re-send
                        verification email`
                    }
                    
                </Content>
                <CustomButton>
                    <button onClick={onSendMail}>
                        <PuffLoader
                            color="white"
                            loading={loading}
                            size={"1.25rem"}
                        />
                        <p>
                            {!send
                                ? "Send Verification Email"
                                : "Re-send Verification Email"}
                        </p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default VerifyEmail;
