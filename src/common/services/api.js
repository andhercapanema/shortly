import axios from "axios";

const api = axios.create({
    baseURL: "https://shortly-api-4vho.onrender.com",
});

export default api;
