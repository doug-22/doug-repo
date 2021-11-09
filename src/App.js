import React, { useEffect, useState } from "react";
import Api from "./api"


export default () => {

  useEffect(() => {
    const loadApi = async () => {
      let list = await Api.getHomeList();
      // console.log(list);
    }

    loadApi();
  }, []);

  return (
    <div>
      Olá Mundo!
    </div>
  );
}