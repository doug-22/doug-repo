import React from "react";
import "./style.css";

const FeaturedProject = ({item}) => {
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
                        {item.descricao}
                    </div>
                    <div className="featured-buttons">
                        <a className="featured-watch-button" href="">Acessar</a>
                        <a className="featured-moreinfo-button" href="">Mais Informações</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProject;