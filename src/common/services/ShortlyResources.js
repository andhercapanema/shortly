import api from "./api";

const ShortlyResources = {
    postNewUser: (body) => api.post("/signup", body),
    signIn: (body) => api.post("/signin", body),
    getRanking: () => api.get("/ranking"),
};

export default ShortlyResources;
