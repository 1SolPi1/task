import axios from 'axios';


const token = localStorage.getItem('jwt') ? localStorage.getItem('jwt') : sessionStorage.getItem('jwt');

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default api;
