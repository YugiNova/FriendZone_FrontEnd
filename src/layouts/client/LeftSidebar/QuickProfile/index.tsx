import { Avatar, AvatarWrapper, Container, InfoItem, InfoWrapper, Name, Nickname, Slogan, Wall } from "./styles"
import { useSelector } from "react-redux"
import { getTheme } from "../../../../redux/selectors"
import smalllogo from "../../../../assets/Small Logo.png"


const QuickProfile:React.FC = () => {
    const theme = useSelector(getTheme)
    
    return(
        <Container theme={theme}>
            <Wall  theme={theme}>
                <AvatarWrapper theme={theme}><Avatar theme={theme} src={smalllogo}/></AvatarWrapper>
            </Wall>
            <InfoWrapper>
                <Name  theme={theme}>Yugi Nova</Name>
                <Nickname  theme={theme}>yugi.nova</Nickname>
                <Slogan  theme={theme}>Write something special for your slogan</Slogan>
                <InfoItem  theme={theme} >330 friends</InfoItem>
                <InfoItem  theme={theme}>500 followers</InfoItem>
            </InfoWrapper>
        </Container>
    )
}

export default QuickProfile