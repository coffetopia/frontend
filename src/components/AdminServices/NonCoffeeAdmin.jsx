import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'; 
// Asset
import regal from "../../assets/regal.png";
import taro from "../../assets/taro.png";
import matcha from "../../assets/matcha.png";
import coklat from "../../assets/coklat.png";

const NonCoffeeAdmin = () => {
  // State untuk menentukan apakah user sudah login
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // State untuk mengelola item yang ditambahkan ke keranjang
  const [cart, setCart] = useState([]);

  const handleDelete = (product) => {
    Swal.fire({
        title: "Apakah Anda yakin ingin menghapus produk ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
    }).then((result) => {
        if (result.isConfirmed) {
            const updatedCart = cart.filter((item) => item !== product);
            setCart(updatedCart);
            Swal.fire(
                "Terhapus!",
                "Produk telah dihapus.",
                "success"
            );
        }
    });
};


  // Daftar produk non-kopi
  const products = [
    { name: "Regal", price: "IDR 20.000", image: regal },
    { name: "Taro", price: "IDR 15.000", image: taro },
    { name: "Matcha", price: "IDR 15.000", image: matcha },
    { name: "Coklat", price: "IDR 15.000", image: coklat },
  ];

  return (
    <>
      <div className="flex sm:justify-start justify-center w-[100%]">
        <table className="table-auto">
          <tbody className="flex flex-col w-[100%]">
            {/* Loop melalui setiap produk dan tampilkan dalam bentuk baris */}
            {products.map((product, index) => (
              <tr
                key={index}
                className="flex w-[100%] justify-start items-center"
              >
                <td className="basis-1/4">
                  {/* Menampilkan gambar produk */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-2 w-[100px] sm:mx-10 my-5 sm:w-[130px]"
                  />
                </td>
                <td className="basis-1/4">
                  {/* Menampilkan nama produk */}
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-16 my-5">
                    {product.name}
                  </p>
                </td>
                <td className="basis-1/4">
                  {/* Menampilkan harga produk */}
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-16 my-5">
                    {product.price}
                  </p>
                </td>
                <td className="basis-1/4 flex justify-around p-4">
                  <div className="flex">
                  <button
                      onClick={() => handleDelete(product)} // Memperbaiki pemanggilan fungsi handleDelete
                      className="bg-[#F41A1A] text-black w-7 h-7 rounded mr-2"
                  >
                      <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <Link to="/updateproduct">
                      <button
                          onClick={() => handleOrderClick(product, "edit")}
                          className="bg-[#3fff00] text-black w-7 h-7 rounded"
                      >
                          <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                  </Link>
              </div>
          </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
                <div className="flex justify-end pe-10 w-[100%] my-5">
                    {/* Link ke halaman add product */}
                    <Link
                    to="/addproduct"
                    className="text-base sm:text-2xl font-bold bg-[#F4991A] border border-[#321313] w-[120px] h-[40px] flex justify-center items-center"
                    >
                    <p>Add </p>
                    </Link>
                </div>
                </>
                );
            };
export default NonCoffeeAdmin;
