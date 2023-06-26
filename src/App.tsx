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

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute component={<ClientLayout/>}/>}>
              <Route index element={<Newfeeds/>}/>
            </Route>
            <Route path="/login" element={<PublicRoute component={<Login/>}/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    );
}

export default App;
