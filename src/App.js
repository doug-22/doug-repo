import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";

export default function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={< Main/>}/>
                <Route path="/home" element={< Home/>} />
                <Route path="/perfil" element={< Perfil/>} />
            </Routes>   
        </BrowserRouter>
  );
}