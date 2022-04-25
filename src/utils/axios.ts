import axios from "axios";

const axiosBase = axios.create({
    baseURL:"http://3.15.154.235:8080",
    headers: {
        'Content-Type': 'application/json',
    }
});

export default axiosBase;