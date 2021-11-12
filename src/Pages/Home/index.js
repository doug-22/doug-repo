import React, { useEffect, useState } from "react"
import "./style.css"
import Api from "../../api"

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
            console.log(projetos);
            let randomChosen = Math.floor(Math.random() * (projetos[0].items.length - 1));
            let chosen = projetos[0].items[randomChosen];
            setFeaturedData(chosen);
            //let chosenInfo = await Api.getProjectInfo(chosen._id, "projeto"); Precisar para modal


        }

        loadApi();
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

    return (
        <div className="page">

            <Header black={blackHeader}/>
            
            {featuredData &&
            <FeaturedProject item={featuredData}/>
            }

            <section className="lists">
                {projectList.map((item, key)=>(
                    <ListRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>        
    );
}

export default Home;