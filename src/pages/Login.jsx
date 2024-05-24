import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import COFFEE_IMAGE from "../assets/coffe.jpg";
import LOGO_IMAGE from "../assets/logo.png";
import InputComponents from "../components/authentication/InputComponents";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', user, {
        withCredentials: true,
      });
      const { accessToken } = response.data.payload;
      localStorage.setItem('authorization', accessToken);
      console.log(accessToken);
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Email atau Password Salah",
        icon: "error",
        confirmButtonText: "Ok",
      });
      console.error("login page", error);
    }
  };

  return (
    <div className="h-screen mx-auto flex flex-col md:flex-row font-sans">
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        <img
          src={COFFEE_IMAGE}
          className="w-full h-full object-cover"
          alt="Cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-3/4 md:h-full bg-white flex flex-col justify-center items-center p-10">
        <div className="w-11/12 md:w-2/3">
          <img src={LOGO_IMAGE} className="w-25 h-12  mb-4" alt="Logo" />
          <h3 className="font-sans text-2xl md:text-3xl text-[#321313] font-bold mb-4">
            Sign In
          </h3>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <InputComponents
              label={"Username :"}
              type={"text"}
              name={"username"}
              onChange={handleChange}
            />

            <InputComponents
              label={"Password :"}
              type={"password"}
              name={"password"}
              onChange={handleChange}
              isPassword={true}
            />

            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-xs text-[#321313] md:text-sm">
                  {" "}
                  Remember me{" "}
                </p>
              </div>
              <p className="text-xs md:text-sm font-semibold text-[#321313] ">
                Forgot your password ?
              </p>
            </div>

            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white bg-[#591E0A] font-bold rounded-md p-3 md:p-4 text-center flex items-center justify-center"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="w-full flex items-center justify-center">
            <p className="text-xs md:text-sm  text-[#321313] font-bold">
              Don’t have an account ?{" "}
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <Link
              to="/register"
              className="w-full text-[#321313] font-bold  bg-[#F4991A] rounded-md p-3 md:p-4 text-center flex items-center justify-center"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
