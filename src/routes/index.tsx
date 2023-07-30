import React, { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch } from "react-redux/es/exports";
import "react-toastify/dist/ReactToastify.css";
import AuthRoute from "./AuthRoute";
import ClientRoute from "./ClientRoute";
import AuthService from "../services/auth.service";
import PageLoading from "../components/Loading/PageLoading";
import { setVerifyEmail } from "../redux/authSlice";

function AppRoute() {
    const [login, setLogin] = useState<boolean>();
    const auth = new AuthService();
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            auth.checkLogin()
                .then((res: any) => {
                    console.log(res.data);

                    setLogin(true);
                    setLoading(false);
                })
                .catch((err: any) => {
                    if (err.data.message == "Account is not verified") {
                        setLogin(false);
                        setLoading(false);
                        dispatch(setVerifyEmail(false));
                    } else {
                        setLogin(false);
                        setLoading(false);
                    }
                });
        }, 3000);
    }, []);

    const showRoute = () => {
        if (login && !loading) {
            return <ClientRoute />;
        } else if (!login && !loading) {
            return <AuthRoute />;
        } else {
            return <PageLoading />;
        }
    };

    return <>{showRoute()}</>;
}

export default AppRoute;
