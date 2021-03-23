import {api} from './Config'

const Execute = (data) => {
    console.log("llegamos a la api")
    console.log(data)
    const body = {
        "data": data
    }
    return api.post('/execute', body);
};

const backend = { Execute }

export default backend