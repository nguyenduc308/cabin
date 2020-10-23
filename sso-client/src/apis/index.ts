import axios from 'axios';
import config from 'config';
const api = axios.create({
  baseURL: `${config.services.SSO}/api`,
});
export default api;
