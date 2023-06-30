import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import ClientLayout from "./layouts/client";
import Newfeeds from "./pages/client/newfeeds";
import { store } from "./redux/store";
import Login from "./pages/client/login";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Profile from "./pages/client/profile.tsx";
import Timeline from "./pages/client/timeline";

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute component={<ClientLayout/>}/>}>
              <Route index element={<Newfeeds/>}/>
              <Route path=":profile_id" element={<Profile/>}>
                <Route index element={<Timeline/>}/>
              </Route>
            </Route>
            <Route path="/login" element={<PublicRoute component={<Login/>}/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    );
}

export default App;
