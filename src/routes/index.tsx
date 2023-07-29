import React, { useEffect, useState, lazy, Suspense } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../redux/store";
import AuthRoute from "./AuthRoute";
import ClientRoute from "./ClientRoute";
import AuthService from "../services/auth.service";
import PageLoading from "../components/Loading/PageLoading";


function AppRoute() {
    const [login, setLogin] = useState<boolean>();
    const auth = new AuthService();
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(()=>{
            auth.checkLogin()
            .then((res: any) => {
                console.log(res.data);
                
                setLogin(true);
                setLoading(false)
            })
            .catch((err: any) => {
                
                setLogin(false);
                setLoading(false)
            });
        },3000)
    }, []);

    const showRoute = () => {
    
        if (login && !loading) {
            
            return (
                <ClientRoute />
            );
        } else if (!login && !loading) {
          
            return <AuthRoute />;
        } 
        else{
           return <PageLoading/>
        }
    };

    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer />
                {/* {showRoute()} */}
                {showRoute()}
            </BrowserRouter>
        </Provider>
    );
}

export default AppRoute;
