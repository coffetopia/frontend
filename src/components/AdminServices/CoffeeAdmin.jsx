import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'; 
// Asset
import coffeeLate from "../../assets/coffee-late.png";
import americano from "../../assets/americano.png";
import cappucino from "../../assets/cappucino.png";
import coffee1 from "../../assets/coffee1.png";

// Daftar produk kopi
const products = [
    { name: "Caffe Latte", price: "IDR 20.000", image: coffeeLate },
    { name: "Americano", price: "IDR 25.000", image: americano },
    { name: "Cappuccino", price: "IDR 25.000", image: cappucino },
    { name: "Expresso", price: "IDR 15.000", image: coffee1 },
];

const CoffeeAdmin = () => {
    // State untuk menentukan apakah user sudah login
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // State untuk mengelola item yang ditambahkan ke keranjang
    const [cart, setCart] = useState([]);

    const handleOrderClick = (product, action) => {
        if (action === "delete") {
            // Implement delete logic here
            const updatedProducts = products.filter((p) => p !== product);
            // Assuming you meant to use setProducts here, but it seems you don't have a state for products
            setProducts(updatedProducts);
            Swal.fire({
                title: "Product telah dihapus",
                icon: "success",
                confirmButtonText: "Ok",
            });
        }
    };

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
                                <td className="basis-1/4 flex justify-around p-4">
                                    <div className="flex">
                                        <button
                                            onClick={() => handleOrderClick(product, "delete")}
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

export default CoffeeAdmin;
