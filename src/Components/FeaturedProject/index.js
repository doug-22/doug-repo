import React, {useState} from "react";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs"
import "./style.css";

import Modal from "../Modal"

const FeaturedProject = ({item}) => {

    let description = item.descricao;
    if(description.length > 200) {
        description = description.substring(0, 200) + "..."
    }

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${item.imagem})`
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">{item.titulo}</div>
                    <div className="featured-description">
                        {description}
                    </div>
                    <div className="featured-buttons">
                        <a className="featured-watch-button" href={item.link} target="_blank" rel="noreferrer"><BsFillPlayFill className="featured-icon-button"/>Acessar</a>
                        {/* eslint-disable-next-line */}
                        <a className="featured-moreinfo-button" onClick={() => setModalVisible(true)}><BsInfoCircle className="featured-icon-button"/> Mais Informações</a>
                        {modalVisible ? <Modal itemModal={item} onClose={() =>  setModalVisible(false)}/> : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProject;