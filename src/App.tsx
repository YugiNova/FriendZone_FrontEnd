import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import ClientLayout from "./layouts/client";
import Newfeeds from "./pages/client/newfeeds";
import { store } from "./redux/store";
import Login from "./pages/client/login";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Profile from "./pages/client/profile.tsx";
import Timeline from "./pages/client/timeline";
import Introduce from "./pages/client/introduce";
import Overview from "./pages/client/introduce/overview";
import Contact from "./pages/client/introduce/contact";
import Place from "./pages/client/introduce/place";
import Work from "./pages/client/introduce/work";
import Event from "./pages/client/introduce/event";

function App() {
    const token = localStorage.getItem("token");


    const showRoute = () => {
        if (token) {
            return (
                <Route
                    path="/"
                    element={<PrivateRoute component={<ClientLayout />} />}
                >
                    <Route index element={<Newfeeds />} />
                    <Route path=":profile_id" element={<Profile />}>
                        <Route path="timeline" element={<Timeline />} />
                        <Route path="introduce" element={<Introduce />}>
                            <Route path="overview" element={<Overview />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="place" element={<Place />} />
                            <Route path="work_education" element={<Work />} />
                            <Route path="event" element={<Event />} />
                        </Route>
                    </Route>
                </Route>
            );
        }
        return (
            <Route path="/" element={<PublicRoute component={<Login />} />} />
        );
    };

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>{showRoute()}</Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
