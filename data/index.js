import axios from "axios";

const httpClient = axios.create(
    {
        baseURL: "/api",
        timeout: 3000
    }
)

export default httpClient;