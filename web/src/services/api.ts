import axios from 'axios'

const api = axios.create({
    baseURL: 'https://happy-orphanag.herokuapp.com',
})

export default api