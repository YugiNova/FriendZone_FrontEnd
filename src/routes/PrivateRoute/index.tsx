import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

interface Props{
    component: JSX.Element
}

const PrivateRoute:React.FC<Props> = ({component}) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate("/login")
        }
    },[])

    return(
        <div>{component}</div>
    )
}

export default PrivateRoute