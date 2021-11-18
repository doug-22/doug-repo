import React from "react";
import { BsFillPlayFill } from "react-icons/bs"
import { FaGithub, FaFileDownload } from "react-icons/fa"
import "./style.css";

import logo from "../../Assets/logo-css.png"

const Modal = ({id = "modal", onClose = () => {}, itemModal}) => {

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }

    return (
        <div id={id} className="modal" onClick={handleOutsideClick}>
            <div className="modal-container" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${itemModal.imagem})`
            }}>
                <button className="modal-close" onClick={onClose}/>
                <div className="modal-vertical">
                    <div className="modal-horizontal">
                        {itemModal.tecnologias ?
                        
                            <>
                                <div className="modal-titulo" style={{color: "#fff"}}>{itemModal.titulo}</div>
                                <div className="modal-button-acessar">
                                    <a className="modal-button-link" href={itemModal.link} target="_blank" rel="noreferrer"><BsFillPlayFill className="modal-button-icon" />Acessar</a>
                                    <a className="modal-button-git" href={itemModal.link_repo} target="_blank" rel="noreferrer"><FaGithub className="modal-button-icon" />Acessar Github</a>
                                </div>
                                <div className="modal-description">
                                    {itemModal.descricao}
                                </div>
                                <div className="modal-tecnology">
                                    Tecnologias
                                    <div className="modal-tecnology-icons">
                                            {itemModal.tecnologias.length > 0 && itemModal.tecnologias.map((item, key) => (
                                                <img key={key} src={item.imagem} alt={item.titulo} />
            
                                            ))}
                                    </div>
                                </div>
                            </>
                        :
                            <>
                                <div className="modal-titulo" style={{color: "#fff"}}>{itemModal.titulo}</div>
                                <div className="modal-button-acessar" style={{marginBottom: "15px"}}>
                                    <a className="modal-button-link" href={itemModal.link} target="_blank" rel="noreferrer"><FaFileDownload className="modal-button-icon" />Download Certificado</a>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;