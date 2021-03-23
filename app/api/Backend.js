import {Backend as api} from './Config'

const Execute = (user, pass) => {
    body = {
        "username" : user,
        "password" : Auth.hashPassword(pass)
    }
    return api.post('/execute', body);
};

const BackendApi = {};

export default BackendApi;