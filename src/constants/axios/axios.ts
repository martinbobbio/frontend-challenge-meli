import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    firstname: 'Martin',
    lastname: 'Bobbio',
  },
});

export default API;
