import React, {useState} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import "./style.css"


const ListRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(-270);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if( x > 0) {
            x = 0;            
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        // numero 8 precisa ser subtituido por items.length para ficar dinâmica
        if( (window.innerWidth - (8 * 270)) > x) {
            x = (window.innerWidth - (8 * 270))
        }
        setScrollX(x);
    }

    console.log(items.length)

    return (
        <div className="listRow">
            <h2>{title}</h2>

            <div className="listRow-left" onClick={handleLeftArrow}>
                <AiOutlineLeft style={{fontSize: 40}}/>
            </div>
            <div className="listRow-right" onClick={handleRightArrow}>
                <AiOutlineRight style={{fontSize: 40}}/>
            </div>

            <div className="listRow-area">
                <div className="listRow-list" style={{
                    marginLeft: scrollX,
                    // numero 8 precisa ser subtituido por items.length para ficar dinâmica
                    width: 8 * 270
                }}>
                    {items.length > 0 && items.map((item, key) => (
                        <div key={key} className="listRow-item">
                            <img src={item.imagem} alt={item.titulo}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListRow;