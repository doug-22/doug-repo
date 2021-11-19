import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope, FaWhatsapp, FaEye } from "react-icons/fa"
import "./style.css"

import Header from "../../Components/Header"
import ContentEducation from "../../Components/ContentEducation";
import ContentExperience from "../../Components/ContentExperience";

import logoHtml from "../../Assets/logo-html5.png"
import logoCss from "../../Assets/logo-css.png"
import logoJs from "../../Assets/logo-js.png"
import logoReact from "../../Assets/logo-react.png"
import logoTs from "../../Assets/logo-ts.png"
import iconMedal from "../../Assets/medalha-de-ouro.png"
import logoUNASUS from "../../Assets/logo_vertical.png"
import logoUFMA from "../../Assets/ufma.png"
import fotoPerfil from "../../Assets/foto-perfil.png"

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
                <img src={fotoPerfil} alt="Perfil"/>
                <div>
                    <span>Oi, eu sou o</span>
                    <h1>Douglas</h1>
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
                <a href="https://github.com/doug-22" target="_blank" rel="noreferrer"><FaGithub className="perfil-contacts-github"/></a>
                <a href="https://www.linkedin.com/in/douglas-oliveira-dev/" target="_blank" rel="noreferrer"><FaLinkedin className="perfil-contacts-linkedin"/></a>
                <a href="mailto:douglas.aguiar410@gmail.com" target="_blank" rel="noreferrer"><FaRegEnvelope className="perfil-contacts-gmail"/></a>
                <a href="https://www.instagram.com/d__oliveiraa/" target="_blank" rel="noreferrer"><FaInstagram className="perfil-contacts-instagram"/></a>
                <a href="https://api.whatsapp.com/send?phone=5598984604334&text=Ol%C3%A1%20Douglas" target="_blank" rel="noreferrer"><FaWhatsapp className="perfil-contacts-whatsapp"/></a>
            </div>

            <div className="perfil-skills">
                <h2>Skills</h2>
                <div className="perfil-skills-icons">
                    <img src={logoHtml} alt="Logo HTML" className="perfil-skills-animation"/>
                    <img src={logoCss} alt="Logo CSS" className="perfil-skills-animation"/>
                    <img src={logoJs} alt="Logo JS" className="perfil-skills-animation"/>
                    <img src={logoReact} alt="Logo React" className="perfil-skills-animation"/>
                    <img src={logoTs} alt="Logo TS" className="perfil-skills-animation"/>
                </div>
            </div>

            <div className="perfil-experience">
                <h2>Experiência</h2>

                <ContentExperience 
                    data={<>Jan 2018 - Dez 2019</>}
                    titulo={<>Bolsista</>}
                    logo={logoUFMA}
                    instituicao={<>UFMA</>}
                    descricao={<>Responsável pela liquidação de despesas e despacho de documentos.</>}
                />

                <ContentExperience 
                    data={<>Jun 2021 - Até o momento</>}
                    titulo={<>Desenvolvedor Front-End</>}
                    logo={logoUNASUS}
                    instituicao={<>UNA-SUS</>}
                    descricao={<>O Sistema Universidade Aberta do SUS (UNA-SUS) foi criado com o objetivo auxiliar na capacitação e educação dos profissionais que atuam no Sistema Único de Saúde (SUS). 
                        Dentro da UNA-SUS atuo no desenvolvimento de recursos educacionais utilizando React, HTML, CSS e Javascript.</>}
                />
            </div>

            <div className="perfil-education">
                <h2>Educação</h2>

                <ContentEducation 
                    titulo={<>Universidade Federal do Maranhão</>} 
                    curso={<>Bacharelado em Ciência e Tecnologia</>} 
                    data={<>Mar 2017 - Out 2021</>} 
                    descricao={<>No curso, construí bases de conhecimento para as engenharias em geral. Desenvolvi conhecimentos introdutórios a Engenharia da Computação, como Fundamentos e Lógica de Programação, Algoritmos, Banco de Dados, Sistemas Operacionais, Processos de Desenvolvimentos de Softwares e Metodologias Ágeis.</>} 
                    iconTcc={iconMedal} 
                    tccDescricao={<>Identificando e Disponibilizando Técnicas de Gamificação para o Ensino de Engenharia de Software</>} 
                />

                <ContentEducation 
                    titulo={<>Universidade Federal do Maranhão</>} 
                    curso={<>Bacharelado em Ciência e Tecnologia</>} 
                    data={<>Nov 2021 - Cursando</>} 
                    descricao={<></>} 
                    iconTcc={iconMedal} 
                    tccDescricao={<>Em construção</>}

                />
            </div>

            <a href="https://doug-22.github.io/assets/assets/cv/cv_douglas_oliveira.pdf" target="_blank" rel="noreferrer" className="perfil-download-button"><FaEye className="perfil-icon-button"/>Ver Currículo</a>

            <footer>
                Desenvolvido por Douglas Oliveira<br/>
                Layout baseado na Netflix<br/>
            </footer>
        </div>
    );
}

export default Perfil;