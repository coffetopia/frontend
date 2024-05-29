import useAuth from './useAuth';
import useAxiosPrivate from './useAxiosPrivate';

export default function useLogout() {
  const axiosPrivate = useAxiosPrivate();
  const { setAuth } = useAuth();

  const logout = async () => {
    try {
      setAuth({});
      await axiosPrivate.delete('/logout');
      localStorage.removeItem('username');
    } catch (error) {
      console.error(error);
    }
  }

  return logout;
}
