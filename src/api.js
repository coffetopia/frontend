import axios from "axios";

const baseURL = "http://127.0.0.1:3000";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

//Auth
async function register(user) {
  try {
    const response = await axiosInstance.post('/register', user);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
}

async function login(user) {
  try {
    const response = await axiosInstance.post('/login', user);
    localStorage.setItem('authorization', response.data.payload.accessToken);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
}

const refreshToken = async () => {
  try {
    const response = await axiosInstance.get('/token');
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
}
export { login, register, refreshToken };