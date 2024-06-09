/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import tahuGejrot from "../../assets/tahuGejrot.png";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { handleDeleteProduct } from "./handleDelete";
import { useState } from "react";

export default function ProductList({ products, setProducts, isAdmin }) {
  const [cart, setCart] = useState([]);

  // Fungsi untuk menangani penambahan item ke keranjang
  const handleOrderClick = (product) => {
    if (!localStorage.getItem('username')) {
      // Menampilkan alert jika user belum login
      Swal.fire({
        title: "Silahkan sign in untuk memesan pesanan!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      // Menambahkan produk yang dipilih ke keranjang
      setCart([...cart, product]);
      // Menampilkan alert sukses
      Swal.fire({
        title: "Product telah ditambahkan",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="flex sm:justify-start justify-center w-[100%]">
      <table className="table-auto">
        <tbody className="flex flex-col w-[100%]">
          {/* Loop melalui setiap produk dan tampilkan dalam bentuk baris */}
          {products?.map((product, index) => (
            <tr
              key={index}
              className="flex w-[100%] justify-start items-center"
            >
              <td className="basis-1/4">
                {/* Menampilkan gambar produk */}
                <img
                  src={tahuGejrot}
                  alt={product.name}
                  className="mx-2 w-[100px] sm:mx-10 my-5 sm:w-[130px]"
                />
              </td>
              <td className="basis-1/4">
                {/* Menampilkan nama produk */}
                <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                  {product.name}
                </p>
              </td>
              <td className="basis-1/4">
                {/* Menampilkan harga produk */}
                <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                  {product.price}
                </p>
              </td>
              {isAdmin ? (
                <td className="basis-1/4 flex justify-around p-4">
                  <div className="flex">
                    <button
                      onClick={() => handleDeleteProduct(product, setProducts)}
                      className="bg-[#F41A1A] text-black w-7 h-7 rounded mr-2"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link to={`/updateproduct/${product.id}`}>
                      <button className="bg-[#3fff00] text-black w-7 h-7 rounded">
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </button>
                    </Link>
                  </div>
                </td>
              ) : (
                <td className="basis-1/4">
                  {/* Tombol untuk menambahkan produk ke keranjang */}
                  <button
                    onClick={() => handleOrderClick(product)}
                    className="rectangle w-[40px] h-[40px] bg-secondary border border-[#747474] mx-4 sm:mx-12 my-5"
                  >
                    <p className="text-2xl text-white">+</p>
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// /* eslint-disable react/prop-types */
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import tahuGejrot from "../../assets/tahuGejrot.png";
// import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
// import axios from "../../api/axios";
// import Swal from "sweetalert2";
// import { handleDeleteProduct } from "./handleDelete";

// export default function ProductList({ data, isAdmin }) {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `/products/category${data ? `/${data?.id}` : ""}`
//         );
//         const productsApi = response.data.payload;
//         setProducts(productsApi);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, [data]);

//   const [cart, setCart] = useState([]);

//   // Fungsi untuk menangani penambahan item ke keranjang
//   const handleOrderClick = (product) => {
//     if (!localStorage.getItem('username')) {
//       // Menampilkan alert jika user belum login
//       Swal.fire({
//         title: "Silahkan sign in untuk memesan pesanan!",
//         icon: "info",
//         confirmButtonText: "Ok",
//       });
//     } else {
//       // Menambahkan produk yang dipilih ke keranjang
//       setCart([...cart, product]);
//       // Menampilkan alert sukses
//       Swal.fire({
//         title: "Product telah ditambahkan",
//         icon: "success",
//         confirmButtonText: "Ok",
//       });
//     }
//   };

//   return (
//     <div className="flex sm:justify-start justify-center w-[100%]">
//       <table className="table-auto">
//         <tbody className="flex flex-col w-[100%]">
//           {/* Loop melalui setiap produk dan tampilkan dalam bentuk baris */}
//           {products?.map((product, index) => (
//             <tr
//               key={index}
//               className="flex w-[100%] justify-start items-center"
//             >
//               <td className="basis-1/4">
//                 {/* Menampilkan gambar produk */}
//                 <img
//                   src={tahuGejrot}
//                   alt={product.name}
//                   className="mx-2 w-[100px] sm:mx-10 my-5 sm:w-[130px]"
//                 />
//               </td>
//               <td className="basis-1/4">
//                 {/* Menampilkan nama produk */}
//                 <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
//                   {product.name}
//                 </p>
//               </td>
//               <td className="basis-1/4">
//                 {/* Menampilkan harga produk */}
//                 <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
//                   {product.price}
//                 </p>
//               </td>
//               {isAdmin ? (
//                 <td className="basis-1/4 flex justify-around p-4">
//                   <div className="flex">
//                     <button
//                       onClick={() => handleDeleteProduct(product, setProducts)}
//                       className="bg-[#F41A1A] text-black w-7 h-7 rounded mr-2"
//                     >
//                       <FontAwesomeIcon icon={faTrash} />
//                     </button>
//                     <Link to={`/updateproduct/${product.id}`}>
//                       <button className="bg-[#3fff00] text-black w-7 h-7 rounded">
//                         <FontAwesomeIcon icon={faPencilAlt} />
//                       </button>
//                     </Link>
//                   </div>
//                 </td>
//               ) : (
//                 <td className="basis-1/4">
//                   {/* Tombol untuk menambahkan produk ke keranjang */}
//                   <button
//                     onClick={() => handleOrderClick(product)}
//                     className="rectangle w-[40px] h-[40px] bg-secondary border border-[#747474] mx-4 sm:mx-12 my-5"
//                   >
//                     <p className="text-2xl text-white">+</p>
//                   </button>
//                 </td>
//               )}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
