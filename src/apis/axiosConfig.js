import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://api.freeapi.app/api/v1/public'
})

export default axiosConfig;