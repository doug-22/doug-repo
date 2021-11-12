import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import Home from "./Pages/Home";

export default function App() {

  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={< Main/>}/>
                <Route path="/home" element={< Home/>} />
            </Routes>   
        </BrowserRouter>
  );
}