const BASE_URL = "http://repositorio-api.herokuapp.com/";

const Api = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return {
            title: "Projetos",
            items: await Api(`projetos`)
        }
    }
}