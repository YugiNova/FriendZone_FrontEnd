import { Radio, RadioChangeEvent } from "antd";
import { Container, Description, IconWrapper, ModalCustom, Name, RadioButton, SelectContainer, Title } from "./styles";
import {useState,useEffect} from "react"
import SelectItem from "./SelectItem";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";


interface Status {
    name: string;
    icon: React.ReactElement;
    value: string;
}
interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    setStatus: (status: Status) => void
}

const AudienceModal: React.FC<Props> = ({ open, setOpen, setStatus }) => {
    const theme = useSelector(getTheme)
    const [audience,setAudience] = useState([
        {
            name: "Public",
            description: "Anyone on Friendzone can see",
            icon: <MdPublic/>,
            checked: true,
            value: "public"
        },
        {
            name: "Friends",
            description: "Only your friends can see",
            icon: <MdGroup/>,
            checked: false,
            value: "friends"
        },
        {
            name: "Only me",
            description: "Only you can see",
            icon: <MdLock/>,
            checked: false,
            value: "me"
        }
    ])

    useEffect(()=>{
        audience.map(item => {
            if(item.checked == true){
                setStatus({
                    name:item.name,
                    icon: item.icon,
                    value: item.value
                })
            }
        })
    },[audience])

    return (
        <ModalCustom
            footer={false}
            width={"30rem"}
            open={open}
            onCancel={() => {
                setOpen(false);
            }}
        >
            <Container theme={theme}>
                <Title theme={theme}>Select Audience</Title>
                <SelectContainer>
                    {
                        audience.map((item,index) => (
                            <SelectItem key={index} audienceType={item} audience={audience} setAudience={setAudience}/>
                        ))
                    }
                </SelectContainer>
            </Container>
        </ModalCustom>
    );
};

export default AudienceModal;
