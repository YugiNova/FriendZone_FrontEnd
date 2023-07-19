import { useSelector } from "react-redux";
import {
    Action,
    ActionButton,
    Audience,
    Container,
    Content,
    DropdownButton,
    DropdownContent,
    DropdownCustom,
    Text,
    Title,
} from "./styles";
import { getTheme } from "../../redux/selectors";
import { Button, MenuProps } from "antd";
import { MdModeEdit, MdMoreHoriz, MdOutlineDelete, MdPublic } from "react-icons/md";
import React,{useState} from 'react'
import AudienceModal from "../AudienceModal";

const IntroduceSection: React.FC = () => {
    const theme = useSelector(getTheme);
    const [open,setOpen] = useState<boolean>(false)

    return (
        <Container theme={theme}>
            <Title theme={theme}>Name</Title>
            <Content>
                <Text theme={theme}>Nguyen Quoc Thang</Text>
                <Action>
                    <Audience onClick={()=> {setOpen(true)}} theme={theme}><MdPublic/></Audience>
                    <AudienceModal open={open} setOpen={setOpen}/>
                    <DropdownCustom
       
                        trigger={["click"]}
                        placement="bottomRight"
                        dropdownRender={()=>(
                            <DropdownContent theme={theme}>
                                <DropdownButton action="Edit" theme={theme}><MdModeEdit/>Edit</DropdownButton>
                                <DropdownButton action="Delete" theme={theme}><MdOutlineDelete/>Delete</DropdownButton>
                            </DropdownContent>
                        )}
                    >
                        <ActionButton theme={theme}>
                            <MdMoreHoriz />
                        </ActionButton>
                    </DropdownCustom>
                </Action>
            </Content>
        </Container>
    );
};

export default IntroduceSection;
