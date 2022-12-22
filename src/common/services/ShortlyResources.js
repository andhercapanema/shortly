import api from "./api";

const ShortlyResources = {
    postNewUser: (body) => api.post("/signup", body),
    getRanking: () => api.get("/ranking"),
};

export default ShortlyResources;
