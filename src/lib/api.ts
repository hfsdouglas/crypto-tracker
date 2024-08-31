import axios from "axios";

const url = "https://api.coingecko.com/api/v3"

export const api = axios.create({
    baseURL: url
})