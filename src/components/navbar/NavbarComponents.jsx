import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { useState } from "react";
import person from "../../assets/person.png";

// Navbar untuk pengguna yang sudah login
const NavbarLoggedIn = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  // Fungsi untuk membuka/menutup menu hamburger
  const openHamburger = () => {
    if (isNavOpen == false) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  };

  // Fungsi untuk logout
  const signLogout = () => {
    localStorage.removeItem("token"); // Menyimpan token di localStorage
    localStorage.removeItem("username"); // Menyimpan token di localStorage
    navigate("/login"); // Berpindah ke halaman login
  };

  return (
    <div className="w-full h-[70px] p-2 flex flex-row justify-between sm:justify-start">
      {/* Logo */}
      <div className="basis-2/4 sm:basis-1/4">
        <NavLink
          to="/"
          className="w-[100%] md:w-[70%] h-full flex items-center mt-1 ms-2"
        >
          <img className="flex" src={logo} alt="" />
        </NavLink>
      </div>

      {/* Username */}
      <div className="icon-content relative flex sm:hidden justify-center items-center">
        <div className="eclipse bg-[#F4991A] w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] rounded-full flex justify-center items-center">
          <img src={person} alt="" className="w-[10px] sm:w-[20px]" />
        </div>
        <p className="mx-2 text-lg font-bold">{username}</p>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu sm:hidden flex items-center me-5">
        <button
          className="border rounded p-2 w-[35px] h-[35px] flex flex-col justify-between items-center"
          onClick={openHamburger}
        >
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
        </button>
      </div>

      {/* Hamburger Content */}
      {isNavOpen ? (
        <div className="hamburger-content sm:hidden absolute active w-full h-[350px] bg-[#fff] z-20 left-0 right-0 card-hamburger">
          <div className="flex flex-col justify-center items-center relative">
            <button
              className="border rounded absolute p-2 w-[35px] h-[35px] flex flex-col justify-center items-center top-5 right-5"
              onClick={openHamburger}
            >
              <div className="line w-[20px] h-[2px] bg-[#e5e7eb] origin-center rotate-45"></div>
              <div className="line w-[20px] h-[2px] bg-[#e5e7eb] origin-center -rotate-45 -translate-y-2/3"></div>
            </button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Products</p>
            </NavLink>
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Checkout</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>About</p>
            </NavLink>
            <div className="flex justify-center items-center font-bold h-full mt-4">
              <NavLink to="/login" onClick={signLogout}>
                <div className="text-center text-xs sm:text-sm px-2 md:text-lg md:px-5 md:py-1 py-2 bg-[#F4991A] rounded-2xl mx-1 sm:mx-2">
                  <p>Logout</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Navigasi */}
      <div className="hidden sm:flex sm:basis-2/4 flex justify-center">
        <div className="items-center bg-[#fff] hidden text-sm sm:flex text-[#707070] md:text-lg font-medium">
          <NavLink
            to="/home"
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
      <div className="hidden sm:block basis-3/4 sm:basis-1/4">
        <div className="flex justify-center items-center font-bold h-full">
          <div className="icon-content relative hidden sm:flex justify-center items-center">
            <div className="eclipse bg-[#F4991A] w-[20px] h-[20px] sm:w-[35px] sm:h-[35px] rounded-full flex justify-center items-center">
              <img src={person} alt="" className="w-[10px] sm:w-[20px]" />
            </div>
            <p className="mx-2 text-sm md:text-base font-bold">{username}</p>
          </div>
          <NavLink to="/login" onClick={signLogout}>
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
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Fungsi untuk membuka/menutup menu hamburger
  const openHamburger = () => {
    if (isNavOpen == false) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  };
  return (
    <div className="w-full h-[70px] p-2 flex flex-row justify-between sm:justify-start">
      {/* Logo */}
      <div className="basis-2/4 sm:basis-1/4">
        <NavLink
          to="/"
          className="w-[100%] md:w-[70%] h-full flex items-center mt-1 ms-2"
        >
          <img className="flex" src={logo} alt="" />
        </NavLink>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu sm:hidden flex items-center me-5">
        <button
          className="border rounded p-2 w-[35px] h-[35px] flex flex-col justify-between items-center"
          onClick={openHamburger}
        >
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
          <div className="line w-[20px] h-[2px] bg-[#e5e7eb]"></div>
        </button>
      </div>

      {/* Hamburger Content */}
      {isNavOpen ? (
        <div className="hamburger-content sm:hidden absolute active w-full h-[350px] bg-[#fff] z-20 left-0 right-0 card-hamburger">
          <div className="flex flex-col justify-center items-center relative">
            <button
              className="border rounded absolute p-2 w-[35px] h-[35px] flex flex-col justify-center items-center top-5 right-5"
              onClick={openHamburger}
            >
              <div className="line w-[20px] h-[2px] bg-[#e5e7eb] origin-center rotate-45"></div>
              <div className="line w-[20px] h-[2px] bg-[#e5e7eb] origin-center -rotate-45 -translate-y-2/3"></div>
            </button>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Products</p>
            </NavLink>
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>Checkout</p>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center px-2 py-2 my-2 mt-5 rounded-xl ${
                  isActive ? "text-[#591E0A] font-bold" : " "
                }`
              }
            >
              <p>About</p>
            </NavLink>
            <div className="flex justify-center items-center font-bold h-full mt-4">
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
      ) : (
        ""
      )}

      {/* Navigasi */}
      <div className="hidden sm:flex sm:basis-2/4 flex justify-center">
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
      <div className="hidden sm:block basis-3/4 sm:basis-1/4">
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
  const token = localStorage.getItem("token");

  return <>{token ? <NavbarLoggedIn /> : <NavbarLoggedOut />}</>;
};

export default NavbarComponents;
