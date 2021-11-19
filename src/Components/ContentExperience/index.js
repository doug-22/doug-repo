import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa"
import "./style.css"

const ContentExperience = ({data, titulo, logo, instituicao, descricao}) => {
    return (
        <div className="perfil-experience-div">
            <span className="perfil-data perfil-data-experience">{data}</span>
            <FaMapMarkerAlt className="perfil-experience-ping" />
            <div>
                <div className="perfil-titulo">{titulo}</div>
                <div className="perfil-experience-logo">
                    <img src={logo} alt="Logo UFMA" />
                    <span>{instituicao}</span>
                </div>
                <div className="perfil-experience-description">{descricao}</div>
            </div>
        </div>
    )
}

export default ContentExperience;