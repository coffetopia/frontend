import useAuth from './useAuth';
import useAxiosPrivate from './useAxiosPrivate';

export default function useLogout() {
  const axiosPrivate = useAxiosPrivate();
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axiosPrivate.delete('/logout');
      localStorage.removeItem('authorization');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return logout;
}
