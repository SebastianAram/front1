import axios from 'axios'

export const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_BASEURL ||'https://ea-4-despliegueba.onrender.com/api/'
})

axiosConfig.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if(error && error.response && (error.response.status == 401 || error.response.status == 403)){
            window.location.pathname = '/';
        }
        return Promise.reject(error);
});