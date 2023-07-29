import { Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login"
import VerifyEmail from "../../pages/auth/verifyEmail"
import ForgotPassword from "../../pages/auth/fogortPassword"

const AuthRoute = () => {

    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verify-email" element={<VerifyEmail/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
        </Routes>
    )
}

export default AuthRoute