import React, {useState} from "react";
import "./style.css"

import Modal from "../Modal"

const ItemList = ({item}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className="itemlist-item" >                 
            <img src={item.imagem} alt={item.titulo} onClick={() => setModalVisible(true)}/>
            {modalVisible ? <Modal itemModal={item} /> : null}
        </div>
    )
}

export default ItemList;