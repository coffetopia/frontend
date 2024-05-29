import { useEffect } from "react"
import useLogout from "../hooks/useLogout";
import { useLocation, useNavigate } from "react-router-dom";

export default function Logout() {
  const logout = useLogout();
  const navigate = useNavigate();
  const location = useLocation();
  const signOut = async () => {
    try {
      await logout();
      navigate('/login', {state: {from: {pathname: location.pathname}}});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    signOut();
    // navigate('/login', {state: {from: {pathname: location.pathname}}});
  }, []);
  
  return (
    <p>loading</p>
  );
}
