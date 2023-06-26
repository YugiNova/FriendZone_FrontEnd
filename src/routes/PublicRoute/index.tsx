import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

interface Props{
    component: JSX.Element
}

const PublicRoute:React.FC<Props> = ({component}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            navigate("/")
        }
    },[])

    return(
        <div>{component}</div>
    )
}

export default PublicRoute