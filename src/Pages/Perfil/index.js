import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa"
import "./style.css"

import Header from "../../Components/Header"

import logoPerfil from "../../Assets/perfil.png"
import logoHtml from "../../Assets/logo-html5.png"
import logoCss from "../../Assets/logo-css.png"
import logoJs from "../../Assets/logo-js.png"
import logoReact from "../../Assets/logo-react.png"
import logoTs from "../../Assets/logo-ts.png"

const Perfil = () => {

    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 20){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener("scroll", scrollListener);
        
        return () => {
            window.removeEventListener("scroll", scrollListener);
        }
    }, []);

    let location = useLocation();
    return (
        <div className="perfil-page">
            <Header black={blackHeader} pageLocation={location.pathname}/>

            <div className="perfil-foto">
                <img src={logoPerfil} alt="Perfil"/>
                <div>
                    <span>Oi, eu sou o</span>
                    <h1>Douglas Oliveira</h1>
                </div>
            </div>

            <div className="perfil-about">
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley of type and 
                scrambled it to make a type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
            </div>

            <div className="perfil-contacts">
                <FaGithub />
                <FaLinkedin />
                <FaInstagram />
                <FaRegEnvelope />
            </div>

            <div className="perfil-skills">
                <h2>Skills</h2>
                <div className="perfil-skills-icons">
                    <img src={logoHtml} alt="Logo HTML"/>
                    <img src={logoCss} alt="Logo CSS"/>
                    <img src={logoJs} alt="Logo JS"/>
                    <img src={logoReact} alt="Logo React"/>
                    <img src={logoTs} alt="Logo TS"/>
                </div>
            </div>

            <div className="perfil-experience">
                <h2>Experiência</h2>
                <div className="perfil-experience-div">
                    <span className="perfil-data">Janeiro 2017 - Dezembro 2019</span>
                    <FaMapMarkerAlt className="perfil-experience-ping"/>
                    <div>
                        <div className="perfil-titulo">Bolsista</div>
                        <span>UFMA</span>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
                <div className="perfil-experience-div">
                    <span className="perfil-data">Janeiro 2021 - Até o momento</span>
                    <FaMapMarkerAlt className="perfil-experience-ping"/>
                    <div>
                        <div className="perfil-titulo">Desenvolvedor Front-End</div>
                        <span>UNA-SUS</span>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                </div>
            </div>

            <div className="perfil-education">
                <h2>Educação</h2>
                <div className="perfil-education-div">
                    <div>
                        <div className="perfil-titulo">Universidade Federal do Maranhão</div>
                        <span>Bacharelado em Ciência e Tecnologia</span>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                    <span className="perfil-data">Mar 2017 - Out 2021</span>
                </div>
                <div className="perfil-education-div">
                    <div>
                        <div className="perfil-titulo">Universidade Federal do Maranhão</div>
                        <span>Bacharelado em Engenharia da Computação</span>
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>
                    <span className="perfil-data">Nov 2021 - Cursando</span>
                </div>
            </div>

            <a href="" target="_blank" rel="noreferrer" className="perfil-download-button"><FaFileDownload className="perfil-icon-button"/>Download Currículo</a>

        </div>
    );
}

export default Perfil;