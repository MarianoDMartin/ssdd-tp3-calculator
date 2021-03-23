import axios from 'axios'

export const api = axios.create({
    baseURL: 'localhost:8080',
    timeout: 60000,
    timeoutErrorMessage: 'Request timed out'
});