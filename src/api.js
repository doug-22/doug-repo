const BASE_URL = "https://repositorio-api.herokuapp.com/";

const Api = async (endpoint) => {
    const req = await fetch(`${BASE_URL}${endpoint}`);
    const json = await req.json();
    return json;
}

// eslint-disable-next-line
export default {
    getHomeList: async () => {
        return [
            {
            title: "Projetos",
            items: await Api(`projetos`)
        },
        {
            title: "Certificados",
            items: await Api(`certificados`)
        }
    ]
    },
    getProjectInfo: async (projectId, type) => {
        let info = {};

        if(projectId){
            switch (type) {
                case "projeto":
                        info = await Api(`projeto/${projectId}`);
                    break;
                case "certificado":
                        info = await Api(`certificado/${projectId}`);
                    break;
            
                default:
                    break;
            }
        }
        return info;
    }
}