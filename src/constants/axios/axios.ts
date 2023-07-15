import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    firstname: 'Martin',
    lastname: 'Bobbio',
  },
});

export default API;
