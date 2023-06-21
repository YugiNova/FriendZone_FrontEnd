import { useDispatch, useSelector } from "react-redux"
import { getTheme } from "../../redux/selectors"
import {CustomSwitch, PopContent, Title, ToggleTheme } from "./styles"
import { useState } from "react";
import ColorList from "./ColorList";
import { toggleDarkTheme, toggleLightTheme } from "../../redux/themeSlice";

const PopoverContent:React.FC = () => {
    const theme = useSelector(getTheme)
    const [checked,setChecked] = useState<boolean>(false)
    const dispatch = useDispatch()

    const onChange = () => {
        if(checked === true){
            dispatch(toggleLightTheme())
        }else{
            dispatch(toggleDarkTheme())
        }
        setChecked(!checked)
    }
    return(
        <PopContent theme={theme}>
            <Title theme={theme}>Choose Color Theme</Title>
            <ColorList/>
            <ToggleTheme>
                <Title theme={theme}>Dark mode</Title>
                <CustomSwitch theme={theme} checked={checked} onChange={onChange}/>
            </ToggleTheme>
        </PopContent>
    )
}

export default PopoverContent