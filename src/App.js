import React, { useEffect, useState } from "react";
import Api from "./api"


export default () => {

  const [useProjectList, setProjectList] = useState([]);

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.getHomeList();
      setProjectList(list);
    }

    loadApi();
  }, []);

  return (
    <div>
      Olá Mundo!
    </div>
  );
}