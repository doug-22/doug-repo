import React, { useEffect, useState } from "react"
import "./styles.css"
import Api from "../../api"
import ListRow from "../../Components/ListRow"

const Home = () => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const loadApi = async () => {
            let list = await Api.getHomeList();
                console.log(list);
            setProjectList(list);
        }

        loadApi();
    }, []);

    return (
        <div className="page">
            <section className="lists">
                {projectList.map((item, key)=>(
                    <ListRow key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>        
    );
}

export default Home;