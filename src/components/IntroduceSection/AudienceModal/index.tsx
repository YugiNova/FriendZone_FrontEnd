import { ModalCustom } from "./styles"

interface Props {
    open: boolean,
    setOpen: (open:boolean) => void
}

const AudienceModal:React.FC<Props> = ({open,setOpen}) => {

    return(
        <ModalCustom style={{width: "auto"}} open={open} onCancel={()=>{setOpen(false)}}>
            
        </ModalCustom>
    )
}

export default AudienceModal