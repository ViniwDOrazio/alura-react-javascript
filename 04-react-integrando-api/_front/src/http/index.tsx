import axios from "axios";

const httpAdmin = axios.create({
    baseURL: 'http://localhost:8002/api/v2/'
})

const http = axios.create({
    baseURL: 'http://localhost:8002/api/v1/'
})

export {httpAdmin}
export {http}

