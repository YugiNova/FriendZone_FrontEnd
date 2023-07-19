import { useSelector } from "react-redux";
import { AddButton, Container, Title } from "./styles";
import { getTheme } from "../../redux/selectors";
import { Button, MenuProps } from "antd";
import {
    MdAddCircleOutline,
    MdModeEdit,
    MdMoreHoriz,
    MdOutlineDelete,
    MdPublic,
} from "react-icons/md";
import React, { useState } from "react";
import AudienceModal from "../AudienceModal";
import Form from "./Form";
import ContentItem from "./ContentItem";

interface Props {
    title: string;
    items: string[];
    addMore?: boolean;
}

const IntroduceSection: React.FC<Props> = ({
    title,
    items,
    addMore = true,
}) => {
    const theme = useSelector(getTheme);
    const [openForm, setOpenForm] = useState<boolean>(false);

    const toggleForm = () => {
        if (openForm) {
            return <Form openForm={openForm} setOpenForm={setOpenForm} />;
        }
        return "";
    };

    const showAddMore = () => {
        if (addMore) {
            return (
                <AddButton
                    onClick={() => {
                        setOpenForm(true);
                    }}
                >
                    <MdAddCircleOutline /> Add more
                </AddButton>
            );
        }
    };

    return (
        <Container theme={theme}>
            <Title theme={theme}>{title}</Title>
            {showAddMore()}

            {toggleForm()}
            {
                items.map(item=>{
                    return  <ContentItem text={item} setOpenForm={setOpenForm} openForm={openForm} />
                })
            }
        </Container>
    );
};

export default IntroduceSection;
