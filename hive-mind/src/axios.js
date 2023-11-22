import axios from "axios"

export const makeRequest = axios.create({
    baseURL: "http://20.244.36.231:8800/api",
    withCredentials: true,
})