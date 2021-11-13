import React from "react";
import { Link } from "react-router-dom"
import { MdPersonOutline, MdOutlineHome } from "react-icons/md";
import "./style.css";

import Logo from "../../Assets/logo.png"

const Header = ({black, pageLocation}) => {
    return (
        <header className={black ? "black": ""}>
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
            <div className="header-user">
                {pageLocation === "/perfil" ?
                <Link to="/home">
                    <div className="user-buttom-home">
                        <MdOutlineHome />
                    </div>
                </Link>
                : 
                <Link to="/perfil">
                    <div className="user-buttom-perfil">
                        <MdPersonOutline />
                    </div>
                </Link>
                }
                
            </div>
        </header>
    );
}

export default Header;