import React from "react";
import { MdOutlineHome, MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom"
import "./style.css";
import documentTitle from "../../Components/documentTitle"

import Logo from "../../Assets/logo.png";

const Main = () => {
    documentTitle("");
    return (
        <div className="main-page">
            <div className="main-header">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="main-buttons">
                <div>
                    <p>Gerenciar acesso:</p>
                </div>
                <div className="main-bottons-access">
                    <Link to="/home" className="home-buttom-link">
                        <div className="home-buttom">
                            <MdOutlineHome />
                        </div>
                        Home
                    </Link>
                    <Link to="/perfil" className="perfil-buttom-link">
                        <div className="perfil-buttom">
                            <MdPersonOutline />
                        </div>
                        Perfil
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Main;