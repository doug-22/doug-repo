import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom"
import { FaGithub, FaLinkedin, FaInstagram, FaRegEnvelope, FaWhatsapp, FaEye } from "react-icons/fa"
import "./style.css"
import documentTitle from "../../Components/documentTitle"

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
import logofreelance from "../../Assets/freelance.jpg"
import logoAlema from "../../Assets/alema.jpg"
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
    documentTitle("| Perfil");
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
                Me chamo Douglas Oliveira, e aqui você vai encontrar um pouco sobre minha caminhada
                dentro do universo da Tecnologia da Informação. Meu primeiro contato com os computadores foi
                na adolescência, quando eu era o filho e sobrinho que sabia mexer nos aparelhos tecnologicos hahaha.
                A curiosidade me levou a buscar tentar entender ainda mais como aqueles aparelhos tão temidos
                pelos meus pais e tios funcionavam e como eram construídos. E toda essa curiosidade me trouxe até
                aqui hoje.
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
                    data={<>Jun 2020 - Jan 2021</>}
                    titulo={<>Desenvolvedor Front-End</>}
                    logo={logofreelance}
                    instituicao={<>Freelancer</>}
                    descricao={
                      <ul style={{padding: 0}}>
                        <li>Desenvolvimento de sites utilizando Next Js, React JS, Typescript, Styled Components, SCSS/SASS;</li>
                        <li>Componentização em React e Typescript;</li>
                        <li>Criação e consumo de APIs;</li>
                        <li>Manutenção de sites.</li>
                      </ul>
                    }
                />
                <ContentExperience 
                    data={<>Jun 2021 - Jan 2022</>}
                    titulo={<>Desenvolvedor Front-End</>}
                    logo={logoUNASUS}
                    instituicao={<>UNA-SUS</>}
                    descricao={
                      <ul style={{padding: 0}}>
                        <li>Desenvolvimento de e-books e infográficos interativos utilizando React JS;</li>
                        <li>Desenolvimento de landing pages utilizando HTML, CSS e Javascript;</li>
                        <li>Responsável pelo desenvolvimento do PPU (Pacote Padrão Una-Sus): criação e persistência de dados.</li>
                      </ul>
                      }
                />
                <ContentExperience 
                    data={<>Jan 2022 - Até o momento</>}
                    titulo={<>Desenvolvedor Front-End</>}
                    logo={logoAlema}
                    instituicao={<>Assembleia Legislativa do MA</>}
                    descricao={
                      <ul style={{padding: 0}}>
                        <li>Responsável pela integração dos novos sistemas, preparando-os para produção e resolvendo possíveis conflitos usando SVN;</li>
                        <li>Desenvolvimento de soluções em Javascript para melhorar o esempenho das aplicações.</li>
                      </ul>
                      }
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
                    curso={<>Bacharelado em Engenharia da Computação</>} 
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