import { useSelector } from "react-redux";
import { ActionWrapper, ButtonWrapper, Container, CustomButton, CustomForm, CustomInput, FormItem } from "./styles";
import { getTheme } from "../../../redux/selectors";
import { useState } from "react";
import AudienceModal from "../../AudienceModal";

interface Props {
    openForm:boolean,
    setOpenForm:(openForm:boolean)=> void
}

const Form: React.FC<Props> = ({openForm,setOpenForm}) => {
    const theme = useSelector(getTheme)
    const [openAudience,setOpenAudience] = useState<boolean>(false)

    return (
        <Container theme={theme}>
            <CustomForm theme={theme}>
                <FormItem theme={theme}>
                    <CustomInput theme={theme} placeholder="Name"/>
                </FormItem>
            </CustomForm>
            <ButtonWrapper theme={theme}>
                <CustomButton onClick={()=>{setOpenAudience(true)}} theme={theme}>Public</CustomButton>
                <AudienceModal open={openAudience} setOpen={setOpenAudience}/>
                <ActionWrapper theme={theme}>
                    <CustomButton onClick={()=>{setOpenForm(false)}} theme={theme}>Cancel</CustomButton>
                    <CustomButton className="submit" theme={theme}>Submit</CustomButton>
                </ActionWrapper>
            </ButtonWrapper>
        </Container>
    );
};

export default Form;
