import { useSelector } from "react-redux";
import logo from "../../../assets/Full Logo.png";
import {
    Banner,
    ButtonWrapper,
    Container,
    Divider,
    Forgot,
    FormCustom,
    FormItem,
    FormWrapper,
    InputCustom,
    LoginButton,
    Logo,
    PasswordCustom,
    RegisterButton,
    Welcome,
    Wrapper,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import { HiUser,HiLockClosed } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import {useState} from 'react'


const Login: React.FC = () => {
    const theme = useSelector(getTheme);
    const navigate = useNavigate()
    const [open,setOpen] = useState<boolean>(false)

    const onLogin = () => {
        localStorage.setItem("token","loged in");
        navigate('/')
    }
    const onCreate = () => {
        setOpen(!open)
    }

    return (
        <Container theme={theme}>
            <Wrapper theme={theme}>
                <Banner theme={theme}>
                    <Logo>
                        <img src={logo} />
                    </Logo>
                    <Welcome theme={theme}>
                        Welcome to our community! We’re excited to have you here
                        and can’t wait to see what you share with us.
                    </Welcome>
                </Banner>
                <FormWrapper>
                    <FormCustom theme={theme} layout="vertical">
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your email!",
                                },
                                {
                                    type: 'email',
                                    message: "Not correct email format"
                                }
                            ]}
                        >
                            <InputCustom prefix={<HiUser/>} placeholder="Email" theme={theme} />
                        </FormItem>
                        <FormItem
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <PasswordCustom prefix={<HiLockClosed/>} placeholder="Password" theme={theme} />
                        </FormItem>
                        <ButtonWrapper>
                            <LoginButton onClick={onLogin} theme={theme}>Log in</LoginButton>
                            <Forgot>Forgot password ?</Forgot>
                            <Divider theme={theme}></Divider>
                            <RegisterButton onClick={onCreate} theme={theme}>Create Account</RegisterButton>
                            <RegisterModal setOpen={setOpen} open={open}/>
                        </ButtonWrapper>
                    </FormCustom>
                </FormWrapper>
            </Wrapper>
        </Container>
    );
};

export default Login;
