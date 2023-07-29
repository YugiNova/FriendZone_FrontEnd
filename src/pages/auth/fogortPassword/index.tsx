import { useSelector } from "react-redux";
import {
    Container,
    Content,
    ContentWrapper,
    CustomButton,
    CustomInput,
    FormCustom,
    FormItem,
    Logo,
    Title,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import logo from "../../../assets/Full Logo.png";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

const ForgotPassword = () => {
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
                <Title>Find your account</Title>
                <Content>
                    Please enter email you registry to find your account :
                    <FormCustom>
                        <FormItem
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: "Email is required",
                                },
                                {
                                    type: "email",
                                    message: "Must have email format",
                                },
                            ]}
                        >
                            <CustomInput placeholder="Email" />
                        </FormItem>
                    </FormCustom>
                </Content>
                <CustomButton>
                    <button className="cancel" onClick={onSendMail}>
                        <p>
                            Cancel
                        </p>
                    </button>
                    <button onClick={onSendMail}>
                        <PuffLoader
                            color="white"
                            loading={loading}
                            size={"1.25rem"}
                        />
                        <p>
                            Find
                        </p>
                    </button>
                </CustomButton>
            </ContentWrapper>
        </Container>
    );
};

export default ForgotPassword;
