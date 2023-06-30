import { Container } from "./styles"

interface Props {
    src:string
}

const PhotoItem:React.FC<Props> = ({src}) => {

    return(
        <Container><img src={src}/></Container>
    )
}

export default PhotoItem 