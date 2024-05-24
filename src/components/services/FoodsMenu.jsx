import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
// Asset
import spageti from "../../assets/spageti.png";
import burger from "../../assets/burger.png";
import nasgor from "../../assets/nasgor.png";

const FoodsMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume this state determines if the user is logged in
  const [cart, setCart] = useState([]); // State to manage cart items

  const handleOrderClick = (product) => {
    if (!isLoggedIn) {
      Swal.fire({
        title: "Silahkan sign in untuk memesan pesanan!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setCart([...cart, product]);
      Swal.fire({
        title: "Product telah ditambahkan",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  const products = [
    { name: "Spaghetti Carbonara", price: "IDR 25.000", image: spageti },
    { name: "Burger", price: "IDR 30.000", image: burger },
    { name: "Nasi Goreng", price: "IDR 20.000", image: nasgor },
  ];

  return (
    <>
      <div className="flex sm:justify-start justify-center w-[100%]">
        <table className="table-auto">
          <tbody className="flex flex-col w-[100%]">
            {products.map((product, index) => (
              <tr
                key={index}
                className="flex w-[100%] justify-start items-center"
              >
                <td className="basis-1/4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-2 w-[100px] sm:mx-10 my-5 sm:w-[130px]"
                  />
                </td>
                <td className="basis-1/4">
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                    {product.name}
                  </p>
                </td>
                <td className="basis-1/4">
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                    {product.price}
                  </p>
                </td>
                <td className="basis-1/4">
                  <button
                    onClick={() => handleOrderClick(product)}
                    className="rectangle w-[40px] h-[40px] bg-[#F4991A] border border-[#747474] mx-4 sm:mx-12 my-5"
                  >
                    <p className="text-2xl text-white">+</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end pe-10 w-[100%] my-5">
        <Link
          to="/checkout"
          className="text-base sm:text-2xl font-bold bg-[#F4991A] border border-[#321313] w-[120px] h-[40px] flex justify-center items-center"
        >
          <p>Next &gt;</p>
        </Link>
      </div>
    </>
  );
};

export default FoodsMenu;
