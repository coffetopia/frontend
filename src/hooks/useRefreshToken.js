import useAuth from "./useAuth";
import axios from "../api/axios";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.get('/token', {
        withCredentials: true,
      });

      setAuth({
        username: localStorage.getItem('username'),
        roles: response.data.payload.roles,
        accessToken: response.data.payload.accessToken,
      });

      return response.data.payload;
    } catch (error) {
     console.error(error);
    }
  }
  return refresh;
}

export default useRefreshToken;
