import React, { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"
import "./style.css"
import Api from "../../api"
import documentTitle from "../../Components/documentTitle"

import ListRow from "../../Components/ListRow"
import FeaturedProject from "../../Components/FeaturedProject"
import Header from "../../Components/Header"

const Home = () => {

    const [projectList, setProjectList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
        const loadApi = async () => {
            //pega lista total
            let list = await Api.getHomeList();
            // console.log(list);
            setProjectList(list);

            //pega o destaque
            let projetos = list.filter(i=>i.title === "Projetos");
            // console.log(projetos);
            let randomChosen = Math.floor(Math.random() * (projetos[0].items.length - 1));
            let chosen = projetos[0].items[randomChosen];
            setFeaturedData(chosen);
            //let chosenInfo = await Api.getProjectInfo(chosen._id, "projeto"); Precisar para modal


        }
        loadApi();

        documentTitle("| Home");
    }, []);

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
        <div className="page">

            <Header black={blackHeader} pageLocation={location.pathname}/>
            
            {featuredData &&
            <FeaturedProject item={featuredData}/>
            }

            <section className="lists">
                {projectList.map((item, key)=>(
                    <ListRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Desenvolvido por Douglas Oliveira<br/>
                Layout baseado na Netflix<br/>
            </footer>

            {projectList.length <= 0 &&
                <div className="loading">
                    <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt="Carregando" width="100"/>
                </div>
            }
        </div>        
    );
}

export default Home;