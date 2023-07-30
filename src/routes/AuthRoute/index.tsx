import { Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login"
import VerifyEmail from "../../pages/auth/verifyEmail"
import ForgotPassword from "../../pages/auth/fogortPassword"
import RecoverPassword from "../../pages/auth/recoverPassword"

const AuthRoute = () => {

    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/verify-email" element={<VerifyEmail/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/recover-password" element={<RecoverPassword/>}/>
        </Routes>
    )
}

export default AuthRoute