import { useSelector } from "react-redux";
import {
    Action,
    ActionButton,
    Audience,
    Content,
    DropdownButton,
    DropdownContent,
    DropdownCustom,
    Text,
} from "./styles";
import { getTheme } from "../../../redux/selectors";
import { useState } from 'react' 
import AudienceModal from "../../AudienceModal";
import { MdModeEdit, MdMoreHoriz, MdOutlineDelete, MdPublic } from "react-icons/md";

interface Props {
    openForm:boolean,
    setOpenForm:(openForm:boolean)=> void,
    text:string
}

const ContentItem:React.FC<Props> = ({openForm,setOpenForm,text}) => {
    const theme = useSelector(getTheme)
    const [open,setOpen] = useState<boolean>(false)

    return(
        <Content>
                <Text theme={theme}>{text}</Text>
                <Action>
                    <Audience onClick={()=> {setOpen(true)}} theme={theme}><MdPublic/></Audience>
                    <AudienceModal open={open} setOpen={setOpen}/>
                    <DropdownCustom
       
                        trigger={["click"]}
                        placement="bottomRight"
                        dropdownRender={()=>(
                            <DropdownContent theme={theme}>
                                <DropdownButton onClick={()=>{setOpenForm(true)}} action="Edit" theme={theme}><MdModeEdit/>Edit</DropdownButton>
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
    )
}

export default ContentItem