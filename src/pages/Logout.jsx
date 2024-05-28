import { useEffect } from "react"
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  
  const logout = useLogout();
  const navigate = useNavigate();
  const signOut = async () => {
    await logout();
    navigate('/login', {replace: true});
  }

  useEffect(() => {
    signOut();
  }, []);
  
  return (
    <div>Logout...</div>
  )
}
