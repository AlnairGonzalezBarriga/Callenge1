import axios from 'axios'

const challengeApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

challengeApi.interceptors.request.use( config =>{
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
} )

export default challengeApi;