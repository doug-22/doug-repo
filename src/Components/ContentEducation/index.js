import React from "react";
import "./style.css"

const ContentEducation = ({titulo, curso, data, descricao, iconTcc, tccDescricao}) => {
    return (
        <div className="perfil-education-div">
            <div>
                <div className="perfil-education-info">
                    <div>
                        <div className="perfil-titulo">{titulo}</div>
                        <span>{curso}</span>
                    </div>
                    <span className="perfil-data">{data}</span>
                </div>
                <div className="perfil-education-description">{descricao}
                    <div className="perfil-education-tcc"><img src={iconTcc} alt="Medalha" width="25" /><div><strong>TCC:</strong><em> {tccDescricao}</em></div></div>
                </div>
            </div>
        </div>
    )
}

export default ContentEducation;