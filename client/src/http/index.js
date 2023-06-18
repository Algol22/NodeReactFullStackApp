import axios from "axios";

const base ='http://localhost:5000/';
const $host = axios.create({
  baseURL: base
});

const $authHost = axios.create({
  baseURL: base
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
