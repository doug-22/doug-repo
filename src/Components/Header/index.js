import React from "react";
import { Link } from "react-router-dom"
import { MdPersonOutline } from "react-icons/md";
import "./style.css";

import Logo from "../../Assets/logo.png"

const Header = ({black}) => {
    return (
        <header className={black ? "black": ""}>
            <div className="header-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>
            <div className="header-user">
                <Link to="/" className="teste">
                    <div className="user-buttom">
                        <MdPersonOutline />
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;