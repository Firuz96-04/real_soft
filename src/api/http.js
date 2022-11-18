import axios from 'axios'
import baseURL from './server'


const instance = axios.create({
    baseURL:`${baseURL}/api/`,
    timeout: 6000
})

instance.interceptors.request.use((config) => {
    console.log(config)
    return config

},function(error) {
    console.log(error)
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    console.log(response)
    return response
}, function(error) {
    console.log(error)
    return Promise.reject(error)
})

export default instance