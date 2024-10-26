import axios from 'axios';

export default axios.create({
    baseURL: 'https://d50d-2001-f70-90a0-5000-4088-447f-6b57-57fd.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"} //cross origin resource sharing, clients trying to access resource on distant remote server when using api and client's request may get blocked , 
                                                                         //need this setting to overcome this  
})