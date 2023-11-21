import axios from "axios"

export const makeRequest = axios.create({
    baseURL: "http://98.70.50.200/api",
    withCredentials: true,
})