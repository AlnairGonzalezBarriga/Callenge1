import axios from 'axios'

export const challengeApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

//export default challengeApi;