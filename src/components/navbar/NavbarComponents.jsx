import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo1.png";
import useAuth from "../../hooks/useAuth";

// Navbar untuk pengguna yang sudah login
const NavbarLoggedIn = () => {
  const location = useLocation();
  
  return (
    <div className="w-full h-[70px] p-2 flex flex-row">
      {/* Logo */}
      <div className="basis-2/4 sm:basis-1/4">
        <NavLink
          to="/"
          className="w-[100%] md:w-[70%] h-full flex items-center mt-1 ms-2"
        >
          <img className="flex" src={logo} alt="" />
        </NavLink>
      </div>

      {/* Navigasi */}
      <div className="basis-2/4 flex justify-center">
        <div className="items-center bg-[#fff] hidden text-sm sm:flex text-[#707070] md:text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
            state={location.pathname}
          >
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>Checkout</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>About</p>
          </NavLink>
        </div>
      </div>

      {/* Tombol Autentikasi */}
      <div className="basis-3/4 sm:basis-1/4">
        <div className="flex justify-center items-center font-bold h-full">
          <NavLink to="/logout">
            <div className="text-center text-xs sm:text-sm px-2 md:text-lg md:px-5 md:py-1 py-2 bg-[#F4991A] rounded-2xl mx-1 sm:mx-2">
              <p>Logout</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// Navbar untuk pengguna yang belum login
const NavbarLoggedOut = () => {
  return (
    <div className="w-full h-[70px] p-2 flex flex-row">
      {/* Logo */}
      <div className="basis-2/4 sm:basis-1/4">
        <NavLink
          to="/"
          className="w-[100%] md:w-[70%] h-full flex items-center mt-1 ms-2"
        >
          <img className="flex" src={logo} alt="" />
        </NavLink>
      </div>

      {/* Navigasi */}
      <div className="basis-2/4 flex justify-center">
        <div className="items-center bg-[#fff] hidden text-sm sm:flex text-[#707070] md:text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>Checkout</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center px-2 md:px-6 py-2 rounded-xl ${
                isActive ? "text-[#591E0A] font-bold" : " "
              }`
            }
          >
            <p>About</p>
          </NavLink>
        </div>
      </div>

      {/* Tombol Autentikasi */}
      <div className="basis-3/4 sm:basis-1/4">
        <div className="flex justify-center items-center font-bold h-full">
          <NavLink to="/login">
            <div className="text-center text-xs sm:text-sm px-2 md:text-lg md:px-5 md:py-1 py-2 bg-white rounded-2xl mx-1 sm:mx-2">
              <p>Sign In</p>
            </div>
          </NavLink>
          <NavLink to="/register">
            <div className="text-center text-xs sm:text-sm px-2 md:text-lg md:px-5 md:py-1 py-2 bg-[#F4991A] rounded-2xl mx-1 sm:mx-2">
              <p>Sign up</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

// Komponen Navbar utama yang akan memilih tampilan berdasarkan status login
const NavbarComponents = () => {
  const { auth } = useAuth();

  return <>{auth.accessToken ? <NavbarLoggedIn /> : <NavbarLoggedOut />}</>;
};

export default NavbarComponents;
