import axios from "axios"


export const makeRequest = axios.create({
    baseURL: "http://13.71.60.218:1000/api",
    withCredentials: true,
})
