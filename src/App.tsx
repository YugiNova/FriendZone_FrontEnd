import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import ClientLayout from "./layouts/client";
import Newfeeds from "./pages/client/newfeeds";
import { store } from "./redux/store";

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientLayout/>}>
              <Route index element={<Newfeeds/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      
    );
}

export default App;
