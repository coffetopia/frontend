import { useState, useEffect } from "react";
import COFFEE_IMAGE from "../assets/coffe.jpg";
import TambahButton from "../components/buttonaction/TambahButton";
import HapusButton from "../components/buttonaction/HapusButton";
import KurangButton from "../components/buttonaction/KurangButton";
import OrderSummary from "../components/checkout/OrderSummary";
import PaymentMethod from "../components/checkout/PaymentMethod"; // Ensure this import is correct
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location?.state;

  useEffect(() => {
    setProducts(cart);
  }, [cart, products]);

  const [tableNumber, setTableNumber] = useState(""); // State for table number
  const [diningOption, setDiningOption] = useState("");

  const handleDelete = (index) => {
    if (!isConfirmed) {
      Swal.fire({
        title: "Apakah Anda yakin ingin menghapus pemesanan ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedProducts = [...products];
          updatedProducts.splice(index, 1);
          setProducts(updatedProducts);
          Swal.fire("Terhapus!", "Pemesanan telah dihapus.", "success");
        }
      });
    }
  };

  const handleTambah = (index) => {
    if (!isConfirmed) {
      const updatedProducts = [...products];
      updatedProducts[index].quantity += 1;
      setProducts(updatedProducts);
    }
  };

  const handleKurang = (index) => {
    if (!isConfirmed) {
      const updatedProducts = [...products];
      if (updatedProducts[index].quantity > 1) {
        updatedProducts[index].quantity -= 1;
      } else {
        updatedProducts.splice(index, 1);
      }
      setProducts(updatedProducts);
    }
  };

  const handleAddMenu = () => {
    navigate("/products"); // Navigasi kembali ke halaman produk
  };

  // State untuk menyimpan pesanan yang sudah dikonfirmasi
  const [confirmedOrder, setConfirmedOrder] = useState([]);

  // State untuk mengontrol apakah order sudah dikonfirmasi atau belum
  const [isConfirmed, setIsConfirmed] = useState(false);

  // State untuk menyimpan total harga
  const [totalPrice, setTotalPrice] = useState(0);

  // Fungsi untuk menangani konfirmasi pesanan
  const handleConfirm = () => {
    if (!isConfirmed) {
      // Simpan daftar produk yang sudah dikonfirmasi
      setConfirmedOrder([...products]);

      // Hitung total harga
      let totalPrice = 0;
      products.forEach((product) => {
        totalPrice += parseInt(product.price, 10) * parseInt(product.quantity, 10);
      });

      // Set state untuk total harga dan status konfirmasi
      setTotalPrice(totalPrice);
      setIsConfirmed(true);
    }
  };

  useEffect(() => {
    const tableBody = document.querySelector("#productTable tbody");
    const totalPriceElement = document.getElementById("totalPrice");
    let totalPrice = 0;

    if (tableBody) {
      tableBody.innerHTML = "";

      products.forEach((product) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = product.name;
        nameCell.className = "p-4";
        row.appendChild(nameCell);

        const amountCell = document.createElement("td");
        amountCell.className = "p-4 text-center";
        amountCell.textContent = product.amount;
        row.appendChild(amountCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = `IDR ${product.price.toLocaleString("id-ID")}`;
        priceCell.className = "p-4 text-right";
        row.appendChild(priceCell);

        tableBody.appendChild(row);

        totalPrice += product.price * product.amount;
      });
    }

    if (totalPriceElement) {
      totalPriceElement.textContent = `IDR ${totalPrice.toLocaleString(
        "id-ID"
      )}`;
    }
  }, [products]);

  return (
    <div className="font-poppins">
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
            <div className="p-4">
              <h3 className="text-xl text-left text-[#321313] font-bold mb-0 p-4">
                Checkout your item now!
              </h3>
              <div className="p-4 bg-white border border-white rounded-md mt-0">
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
                    {cart.length > 0 ? cart.map((product, index) => (
                      <tr key={index}>
                        <td className="p-4">{product.name}</td>
                        <td className="p-5 flex items-center">
                          <KurangButton onClick={() => handleKurang(index)} />
                          {product.quantity}
                          <TambahButton onClick={() => handleTambah(index)} />
                        </td>
                        <td className="p-4">{`IDR ${product.price.toLocaleString(
                          "id-ID"
                        )}`}</td>
                        <td className="p-4 flex justify-start items-center">
                          <HapusButton onClick={() => handleDelete(index)} />
                        </td>
                      </tr>
                    )) : ''}
                  </tbody>
                </table>
                <div className="flex items-center space-x-2 mt-8">
                  <label
                    htmlFor="tableNumber"
                    className="text-sm text-[#321313]"
                  >
                    Table no :
                  </label>
                  <select
                    id="tableNumber"
                    className="bg-white border border-[#321313] text-[#321313] text-xs rounded-md p-1 w-52"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    required
                  >
                    <option value="">select a table number</option>
                    <option value="1">Meja 1</option>
                    <option value="2">Meja 2</option>
                    <option value="3">Meja 3</option>
                    {/* Tambahkan pilihan meja lainnya jika perlu */}
                  </select>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <label
                    htmlFor="diningOption"
                    className="text-sm text-[#321313]"
                  >
                    Dining Option:
                  </label>
                  <select
                    id="diningOption"
                    className="bg-white border border-[#321313] text-[#321313] text-xs rounded-md p-1 w-44"
                    value={diningOption}
                    onChange={(e) => setDiningOption(e.target.value)}
                    required
                    >
                  <option value="">Select an option</option>
                    <option value="dine-in">Dine In</option>
                    <option value="take-away">Take Away</option>
                  </select>
                  </div>
                <div className="flex flex-col space-y-2 mt-4">
                  <input
                    type="text"
                    id="catatan"
                    className="bg-white border border-[#321313] text-[#321313] text-xs rounded-md p-2 w-72"
                    placeholder="catatan..."
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-start w-full mb-4 sm:mb-4 mt-8">
                    <button
                      type="submit"
                      onClick={handleAddMenu} // Panggil fungsi handleAddMenu saat tombol diklik
                      className="text-white bg-[#591E0A] hover:bg-[#693828] focus:ring-4 focus:outline-none focus:ring-[#a15941] font-bold rounded-lg text-sm w-32 sm:w-auto px-5 py-2.5 text-center"
                    >
                      Add Menu
                    </button>
                  </div>
                  <div className="flex justify-end w-full mb-4 sm:mb-4 mt-8">
                    <button
                      type="submit"
                      onClick={handleConfirm}
                      className="text-white bg-[#F4991A] hover:bg-[#f6aa40] focus:ring-4 focus:outline-none focus:ring-[#facc8d] font-bold rounded-lg text-sm w-24 sm:w-auto px-5 py-2.5 text-center"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl text-left text-white font-bold mb-0 p-4">
                Order Summary
              </h3>
              {isConfirmed && (
                <OrderSummary
                  confirmedOrder={confirmedOrder}
                  totalPrice={totalPrice}
                />
              )}

              <h3 className="text-xl text-left text-white font-bold mb-0 p-4">
                Payment Method
              </h3>
              <PaymentMethod />

              <div className="p-4 mt-4">
                <button
                  type="submit"
                  className="text-white bg-[#F4991A] hover:bg-[#f6aa40] focus:ring-4 focus:outline-none focus:ring-[#facc8d] font-bold rounded-lg text-sm w-full sm:w-auto sm:px-40 sm:py-3.5 px-1 py-2.5 text-center disabled:bg-opacity-100"
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
