import { useSelector } from "react-redux"
import { Container} from "./styles"
import { getTheme } from "../../../../redux/selectors"
import IntroduceSection from "../../../../components/IntroduceSection"


const Overview:React.FC = () => {
    const theme = useSelector(getTheme)

    return(
        <Container>
            <IntroduceSection title="Name" items={["Nguyễn Quốc Thắng"]} addMore={false}/>
            <IntroduceSection title="Birthday" items={["13/12/1999"]} addMore={false}/>
            <IntroduceSection title="Gender" items={["Male"]} addMore={false}/>
        </Container>
    )
}

export default Overview