import { DatePicker, Modal, Radio, RadioChangeEvent, Select } from "antd";
import {
    Container,
    CustomForm,
    CustomInput,
    FormItem,
    Header,
    NameWrapper,
    SubmitButton,
} from "./styles";
import { useState } from "react";
import { RiLockPasswordLine, RiLockPasswordFill} from "react-icons/ri";
import { FaUserNinja, FaUserNurse} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const RegisterModal: React.FC<Props> = ({ open, setOpen }) => {
    const onClose = () => {
        setOpen(!open);
    };

    return (
        <Modal footer={null} open={open} onCancel={onClose}>
            <Container>
                <Header>
                    <h1>Sign up</h1>
                    <h3>It's quick and easy.</h3>
                </Header>
                <CustomForm layout="vertical">
                    <NameWrapper>
                        <FormItem
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: "First name is require",
                                },
                            ]}
                        >
                            <CustomInput prefix={<FaUserNinja/>} placeholder="First name" />
                        </FormItem>
                        <FormItem
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: "Last name is require",
                                },
                            ]}
                        >
                            <CustomInput prefix={<FaUserNurse/>} placeholder="Lastname" />
                        </FormItem>
                    </NameWrapper>
                    <FormItem
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Email address is require",
                            },
                        ]}
                    >
                        <CustomInput prefix={<MdAlternateEmail/>} placeholder="Email address" />
                    </FormItem>
                    <FormItem
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Password is require",
                            },
                        ]}
                    >
                        <CustomInput prefix={<RiLockPasswordFill/>} placeholder="Password" />
                    </FormItem>
                    <FormItem
                        name="confirmPassword"
                        rules={[
                            {
                                required: true,
                                message: "Password need to confirm",
                            },
                        ]}
                    >
                        <CustomInput prefix={<RiLockPasswordLine/>} placeholder="Confirm password" />
                    </FormItem>
                    <NameWrapper>
                        <FormItem
                            label="Date of birth"
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: "Birthday is required",
                                },
                            ]}
                        >
                            <DatePicker style={{ width: "100%" }} />
                        </FormItem>
                        <FormItem
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: "Birthday is required",
                                },
                            ]}
                        >
                            <Select
                                defaultValue="male"
                                style={{ width: "100%" }}
                                // onChange={handleChange}
                                options={[
                                    { value: "male", label: "Male" },
                                    { value: "female", label: "Female" },
                                    { value: "other", label: "Other" },
                                ]}
                            />
                        </FormItem>
                    </NameWrapper>
                </CustomForm>
                <SubmitButton>Sign up</SubmitButton>
            </Container>
        </Modal>
    );
};

export default RegisterModal;
