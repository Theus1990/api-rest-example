import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        'Accept': "aplication/json",
        'Content-Type': 'aplication/json'
    }
});

export default api;