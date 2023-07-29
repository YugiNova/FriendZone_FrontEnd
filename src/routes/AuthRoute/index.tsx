import { Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login"

const AuthRoute = () => {

    return(
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default AuthRoute