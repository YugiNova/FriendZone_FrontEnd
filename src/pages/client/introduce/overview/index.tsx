import { useSelector } from "react-redux"
import { Container, Title } from "./styles"
import { getTheme } from "../../../../redux/selectors"
import IntroduceSection from "../../../../components/IntroduceSection"


const Overview:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container>
            <IntroduceSection/>

        </Container>
    )
}

export default Overview