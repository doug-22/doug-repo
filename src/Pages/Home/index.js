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
    const [count, setCount] = useState(0);

    useEffect(() => {
        const loadApi = async () => {
            //pega lista total
            let list = await Api.getHomeList();
            setProjectList(list);

            let projetos = list.filter(i=>i.title === "Projetos");
            let countProject = projetos[0].items.meta.count;
            setCount(countProject);

            //pega o destaque
            // let projetos = list.filter(i=>i.title === "Projetos");
            let randomChosen = Math.floor(Math.random() * (countProject - 1));
            let chosen = projetos[0].items.data[randomChosen];
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

            {count <= 0 &&
                <div className="loading">
                    <img src="https://www.rchandru.com/images/portfolio/loading.gif" alt="Carregando" width="100"/>
                </div>
            }
        </div>        
    );
}

export default Home;