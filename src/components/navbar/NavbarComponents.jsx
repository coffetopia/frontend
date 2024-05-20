import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";

const NavbarComponents = () => {
  return (
    <div className="w-full h-[70px] p-2 flex flex-row">
      <div className="basis-2/4 sm:basis-1/4">
        <NavLink
          to="/"
          className="w-[100%] md:w-[70%] h-full flex items-center mt-1 ms-2"
        >
          <img className="flex" src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="basis-2/4 flex justify-center">
        <div className="items-center bg-[#fff] hidden text-sm sm:flex text-[#591E0A] md:text-lg font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#591E0A]"
                : "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#707070] font-medium"
            }
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#591E0A]"
                : "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#707070] font-medium"
            }
          >
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/checkout"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#591E0A]"
                : "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#707070] font-medium"
            }
          >
            <p>Checkout</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#591E0A]"
                : "flex items-center px-2 md:px-6 py-2 rounded-xl text-[#707070] font-medium"
            }
          >
            <p>About</p>
          </NavLink>
        </div>
      </div>
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

export default NavbarComponents;
