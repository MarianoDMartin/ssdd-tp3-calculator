import axios from 'axios'

export const Backend = axios.create({
    baseUrl: 'localhost:8080',
    timeout: 60000,
    timeoutErrorMessage: 'Request timed out'
})