import api from "./api";

const ShortlyResources = {
    postNewUser: (body) => api.post("/signup", body),
    signIn: (body) => api.post("/signin", body),
    shortenUrl: (body, token) =>
        api.post("/urls/shorten", body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    openUrl: (shortUrl) => api.get(`urls/open/${shortUrl}`),
    deleteUrl: (id, token) =>
        api.delete(`/urls/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    getUsersUrls: (token) =>
        api.get("/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }),
    getRanking: () => api.get("/ranking"),
};

export default ShortlyResources;
