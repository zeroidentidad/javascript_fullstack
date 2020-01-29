import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://my-json-server.typicode.com/zeroidentidad/dbjson'
});

export default clienteAxios;