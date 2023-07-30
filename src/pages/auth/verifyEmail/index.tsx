import { useDispatch, useSelector } from "react-redux";
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
import { useNavigate } from "react-router-dom";
import { setVerifyEmail } from "../../../redux/authSlice";
import AuthService from "../../../services/auth.service";

const VerifyEmail = () => {
    const theme = useSelector(getTheme);
    const [send, setSend] = useState<boolean>(false);
    const [sendLoading, setSendLoading] = useState<boolean>(false);
    const [cancelLoading, setCancelLoading] = useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = new AuthService()

    const onSendMail = () => {
        setSendLoading(true);
        auth.sendVerificationEmail().then(res=>{
            setSendLoading(false)
            setSend(true)
        })
    }

    const onCancel = async () => {
        setCancelLoading(true)
        await auth.removeCookie()
        dispatch(setVerifyEmail(true))
        navigate("/")
    }

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
                        `Thank you for signing up for our service. Just one more step
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
                    <button className="cancel" onClick={onCancel}>
                        <PuffLoader
                            color="black"
                            loading={cancelLoading}
                            size={"1.25rem"}
                        />
                        <p>
                            Cancel
                        </p>
                    </button>
                    <button onClick={onSendMail}>
                        <PuffLoader
                            color="white"
                            loading={sendLoading}
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
