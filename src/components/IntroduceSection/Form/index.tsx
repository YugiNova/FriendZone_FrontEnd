import { useSelector } from "react-redux";
import {
    ActionWrapper,
    ButtonWrapper,
    Container,
    CustomButton,
    CustomDatePicker,
    CustomForm,
    CustomInput,
    CustomRangePicker,
    CustomTextArea,
    FormItem,
    Title,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import { useState } from "react";
import AudienceModal from "../../AudienceModal";

import { DatePicker, Form as FormAntd } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

interface FormItemType {
    name: string;
    type: string;
    title:string
    inputType: "text" | "textarea" | "range" | "date";
}

interface Status {
    name: string;
    icon: React.ReactElement;
    value: string;
}

interface Props {
    openForm: boolean;
    setOpenForm: (openForm: boolean) => void;
    formRender: FormItemType[];
}

const Form: React.FC<Props> = ({ openForm, setOpenForm, formRender }) => {
    const theme = useSelector(getTheme);
    const [openAudience, setOpenAudience] = useState<boolean>(false);
    const [status, setStatus] = useState<Status>();
    const [form] = FormAntd.useForm();

    const onSubmit = async () => {
        try {
            const data = await form.validateFields();
            // data.time[0] = moment(data.time[0]).format("YYYY");
            // data.time[1] = data.time[1]
            //     ? moment(data.time[1]).format("YYYY")
            //     : "now";
            console.log(data);
        } catch (error) {}
    };

    const renderInput = (type: string,title:string) => {
        switch (type) {
            case "text":
                return <CustomInput theme={theme} placeholder={title} />;
            case "textarea":
                return <CustomTextArea theme={theme} placeholder={title} />;
            case "range":
                return (
                    <CustomRangePicker
                        allowEmpty={[false, true]}
                        theme={theme}
                        picker="date"
                        format={"MM-YYYY"}
                    />
                );
            case "date":
                return (
                    <CustomDatePicker
                        theme={theme}
                        picker="date"
                        format={"DD-MM-YYYY"}
                    />
                );
        }
    };

    return (
        <Container theme={theme}>
            <CustomForm form={form} theme={theme}>
                {formRender.map((item, index) => {
                    return (
                        <FormItem
                            name={item.name}
                            theme={theme}
                            rules={[
                                {
                                    required: true,
                                    message: "Fields is required",
                                },
                            ]}
                        >
                            {renderInput(item.inputType,item.title)}
                        </FormItem>
                    );
                })}
            </CustomForm>
            <ButtonWrapper theme={theme}>
                <CustomButton
                    onClick={() => {
                        setOpenAudience(true);
                    }}
                    theme={theme}
                >
                    {status?.icon}
                    {status?.name}
                </CustomButton>
                <AudienceModal
                    open={openAudience}
                    setOpen={setOpenAudience}
                    setStatus={setStatus}
                />
                <ActionWrapper theme={theme}>
                    <CustomButton
                        onClick={() => {
                            setOpenForm(false);
                        }}
                        theme={theme}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton
                        onClick={onSubmit}
                        className="submit"
                        theme={theme}
                    >
                        Submit
                    </CustomButton>
                </ActionWrapper>
            </ButtonWrapper>
        </Container>
    );
};

export default Form;
