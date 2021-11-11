import React from "react";
import "./style.css"


const ListRow = ({title, items}) => {
    return (
        <div className="listRow">
            <h2>{title}</h2>
            <div className="listRow-area">
                <div className="listRow-list">
                    {items.length > 0 && items.map((item, key) => (
                        <div key={key} className="listRow-item">
                            <img src={item.capa || item.imagem} alt={item.titulo}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListRow;