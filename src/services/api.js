import axios from 'axios';

const api = axios.create({
  baseURL: "https://akabab.github.io/superhero-api/api"
 });

export default api;