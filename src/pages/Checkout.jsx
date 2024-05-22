import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponents from "../components/navbar/NavbarComponents";
import COFFEE_IMAGE from "../assets/coffe.jpg";
import Buttoncard from "../components/buttoncheckout/Buttoncard";
import Buttonbank from "../components/buttoncheckout/Buttonbank";
import Buttoncash from "../components/buttoncheckout/Buttoncash";
import TambahButton from "../components/buttonaction/TambahButton";
import HapusButton from "../components/buttonaction/HapusButton";
import EditButton from "../components/buttonaction/EditButton";
// Ensure correct import

const Checkout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return null;
  }

  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const [products, setProducts] = useState([
    { name: "Product 1", amount: "1", price: 10000 },
    { name: "Product 2", amount: "2", price: 20000 },
    { name: "Product 3", amount: "3", price: 30000 },
  ]);

  useEffect(() => {
    const tableBody = document.querySelector("#productTable tbody");
    const totalPriceElement = document.getElementById("totalPrice");
    let totalPrice = 0;

    // Clear any existing rows in tbody
    tableBody.innerHTML = "";

    products.forEach((product) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = product.name;
      nameCell.className = "p-4"; // Add padding to the cell
      row.appendChild(nameCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = `IDR ${product.price.toLocaleString("id-ID")}`;
      priceCell.className = "p-4"; // Add padding to the cell
      row.appendChild(priceCell);

      tableBody.appendChild(row);

      totalPrice += product.price;
    });

    totalPriceElement.textContent = `IDR ${totalPrice.toLocaleString("id-ID")}`;
  }, [products]);

  return (
    <div className="font-sans">
      <NavbarComponents />
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-start text-[#321313]"
        style={{
          backgroundImage: `url(${COFFEE_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-20 px-4 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main section */}
            <div className="p-4">
              <h3 className="text-xl text-left text-[#321313] font-bold mb-0">
                Checkout your item now!
              </h3>
              <div className="p-4 bg-white border-1 border-[#321313] rounded-md mt-0">
                <h3 className="text-3xl text-center font-bold mb-4 border-b border-gray-200">
                  Products
                </h3>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-4">Name</th>
                      <th className="text-left p-4">Amount</th>
                      <th className="text-left p-4">Price</th>
                      <th className="text-left p-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td className="p-4">{product.name}</td>
                        <td className="p-4">{product.amount}</td>
                        <td className="p-4">{`IDR ${product.price.toLocaleString(
                          "id-ID"
                        )}`}</td>
                        <td className="flex justify-around p-4">
                          <TambahButton
                            onTambah={() => console.log("Tambah clicked")}
                          />
                          <HapusButton onClick={() => handleDelete(index)} />
                          <EditButton
                            onEdit={() => console.log("Edit clicked")}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex flex-col space-y-2 mt-8">
                  <input
                    type="text"
                    id="catatan"
                    className="bg-white border border-[#321313] text-[#321313] text-xs rounded-md p-2 w-80"
                    placeholder="catatan..."
                    required
                  />
                </div>
                <div className="flex justify-end w-full mb-4 sm:mb-4 mt-8">
                  <button
                    type="submit"
                    className="text-white bg-[#F4991A] hover:bg-[#f6aa40] focus:ring-4 focus:outline-none focus:ring-[#facc8d] font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
            {/* Aside section */}
            <div className="p-4">
              <h3 className="text-xl text-left text-white font-bold mb-0">
                Order Summary
              </h3>
              <div className="p-4 bg-white border-1 rounded-md w-4/5 mt-0 border-[#321313]">
                <table id="productTable" className="w-full">
                  <tbody>{/* Dynamic content will be inserted here */}</tbody>
                  <tfoot>
                    <tr className="p-10 mt-10 font-bold">
                      <td className="p-4">Total</td>
                      <td className="p-4 text-left" id="totalPrice">
                        0
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="p-4">
                <h3 className="text-xl text-left text-white font-bold mb-0">
                  Payment Method
                </h3>
                <div className="p-4 bg-white border-1 rounded-md w-4/5 mt-0 border-[#321313]">
                  <div className="mb-4">
                    <Buttoncard />
                  </div>
                  <div className="mb-4">
                    <Buttonbank />
                  </div>
                  <div>
                    <Buttoncash />
                  </div>
                </div>
              </div>

              <div className="p-4 mt-4">
                <button
                  type="submit"
                  className="text-white bg-[#F4991A] hover:bg-[#f6aa40] focus:ring-4 focus:outline-none focus:ring-[#facc8d] font-bold rounded-lg text-sm w-full sm:w-auto px-44 py-3.5 text-center disabled:bg-opacity-100"
                >
                  Confirm and Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
