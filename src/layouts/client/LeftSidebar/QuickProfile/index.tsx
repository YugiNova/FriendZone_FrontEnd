import { Avatar, AvatarWrapper, Container, InfoItem, InfoWrapper, Name, Nickname, Slogan, Wall } from "./styles"
import { useSelector } from "react-redux"
import { getAuth, getCurrentUser, getTheme } from "../../../../redux/selectors"
import smalllogo from "../../../../assets/Small Logo.png"
import { useEffect } from "react"


const QuickProfile:React.FC = () => {
    const theme = useSelector(getTheme)
    const currentUser = useSelector(getCurrentUser)

    return(
        <Container theme={theme}>
            <Wall  theme={theme}>
                <AvatarWrapper theme={theme}><Avatar theme={theme} src={smalllogo}/></AvatarWrapper>
            </Wall>
            <InfoWrapper>
                <Name  theme={theme}>{currentUser.display_name}</Name>
                <Nickname  theme={theme}>{currentUser.nickname}</Nickname>
                <Slogan  theme={theme}>{currentUser.profile?.introduce}</Slogan>
                <InfoItem  theme={theme} >{currentUser.profile?.friends_count} friends</InfoItem>
                <InfoItem  theme={theme}>{currentUser.profile?.followers_count} friends</InfoItem>
            </InfoWrapper>
        </Container>
    )
}

export default QuickProfile