import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AppRoute from "./routes";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux/es/exports";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer />
                <AppRoute />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
