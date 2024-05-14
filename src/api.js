import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL,
  });

  instance.defaults.headers.common['Content-Type'] = 'application/json';

  return instance;
};

//Auth
async function login(user) {
  try {
    const axiosInstance = createAxiosInstance();
    const response = await axiosInstance.post('/login', user);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}

async function register(user) {
  try {
    const axiosInstance = createAxiosInstance();
    const response = await axiosInstance.post('/register', user);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
}

export { login, register };