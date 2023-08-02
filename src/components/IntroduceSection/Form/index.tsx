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
            let result = {...data}
            if(data.year){
                data.year[0] = moment(data.year[0]).format("YYYY");
                data.year[1] = data.year[1]
                ? moment(data.year[1]).format("YYYY")
                : "now";
              
                result = {...result,year_start: data.year[0],year_end: data.year[1]}
            }
            let {year:_,...newData} = result
            newData = {...newData,status:status?.value}
            let service = formRender[0].type
            console.log(newData,service);
        } catch (error) {}
    };

    const renderInput = (type: string,title:string,name:string) => {
        switch (type) {
            case "text":
                return <CustomInput hidden={name == "type" ? true : false} theme={theme} placeholder={title} />;
            case "textarea":
                return <CustomTextArea hidden={name == "type" ? true : false} theme={theme} placeholder={title} />;
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
                            hidden={item.name == "type" ? true :false}
                            initialValue={item.name == "type" ? item.title : ''}
                            name={item.name}
                            theme={theme}
                            rules={[
                                {
                                    required: true,
                                    message: "Fields is required",
                                },
                            ]}
                        >
                            {renderInput(item.inputType,item.title,item.name)}
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
