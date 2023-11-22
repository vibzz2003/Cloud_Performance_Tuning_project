import axios from "axios"
import {currentUser} from './context/authContext'

export const makeRequest = axios.create({
    baseURL: "http://localhost:8800/api",
    withCredentials: true,
})
