import axios from "axios"


export const makeRequest = axios.create({
    baseURL: "http://98.70.51.202/api",
    withCredentials: true,
})
