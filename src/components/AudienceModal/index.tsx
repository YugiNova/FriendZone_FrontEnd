import { Radio, RadioChangeEvent } from "antd";
import { Container, Description, IconWrapper, ModalCustom, Name, RadioButton, SelectContainer, Title } from "./styles";
import {useState} from "react"
import SelectItem from "./SelectItem";
import { useSelector } from "react-redux";
import { getTheme } from "../../redux/selectors";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const AudienceModal: React.FC<Props> = ({ open, setOpen }) => {
    const theme = useSelector(getTheme)
    const [value, setValue] = useState(1);
    const [audience,setAudience] = useState([
        {
            name: "Public",
            description: "Anyone on Friendzone can see",
            icon: <MdPublic/>,
            checked: true
        },
        {
            name: "Friends",
            description: "Only your friends can see",
            icon: <MdGroup/>,
            checked: false
        },
        {
            name: "Only me",
            description: "Only you can see",
            icon: <MdLock/>,
            checked: false
        }
    ])

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

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
                        audience.map(item => (
                            <SelectItem audienceType={item} audience={audience} setAudience={setAudience}/>
                        ))
                    }
                </SelectContainer>
            </Container>
        </ModalCustom>
    );
};

export default AudienceModal;
