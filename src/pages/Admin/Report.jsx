import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BackgroundAbout from "../../components/background/BackgroundAbout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Report.css";
import axios from "../../api/axios";

const Report = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/orders");
        const data = response.data.payload;
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  function calculateTotalAmount(data) {
    return data.reduce((total, entry) => total + entry.amount, 0);
  }

  const totalAmount = calculateTotalAmount(orders);
  
  function getFormattedDate(isoTime) {
    const date = new Date(isoTime);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getFormattedTime(isoTime) {
    const date = new Date(isoTime);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function addFormattedTimeAttribute(data) {
    return data.map(entry => {
      const date = getFormattedDate(entry.createdAt);
      const time = getFormattedTime(entry.createdAt);
      return {
        ...entry,
        date,
        time,
      };
    });
  }

  const updateOrders = addFormattedTimeAttribute(orders);

  return (
    <div className="font-poppins">
      <BackgroundAbout>
        <div className="p-4 max-w-screen-lg mx-auto">
          <h3 className="text-xl text-[#321313] text-left font-bold">
            Table Report
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-left mt-4">
            <div className="flex flex-col sm:flex-row items-left mb-4 sm:mb-0">
              <span className="mr-2 text-[#321313] font-bold">Date:</span>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-left">
              <span className="mr-2 text-[#321313] font-bold">Search:</span>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="search-input"
                />
                <button className="search-button bg-[#F4991A] text-white px-2 py-1 rounded">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto mt-4 table-container">
            <table className="min-w-full bg-white border-1 border-[#321313] rounded-md table-report">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Total Price</th>
                  <th className="py-2 px-4 border-b">Detail</th>
                  <th className="py-2 px-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {updateOrders.map(
                  (order, index) => (
                    <tr
                      key={index}
                      className={
                        order.id === parseInt(searchId) ? "bg-orange-200" : ""
                      }
                    >
                      <td className="text-center py-2 px-4 border-b">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 border-b">{order.date}</td>
                      <td className="text-center py-2 px-4 border-b">
                        {order.time}
                      </td>
                      <td className=" text-center py-2 px-4 border-b">
                        {order.user?.username}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {order.amount.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        <Link
                          to={`/orders`}
                          className="link-detail text-[#321313] font-bold bg-[#F4991A] rounded-md p-1 w-6 md:p-1 text-center flex items-center justify-center"
                        >
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="fa-icon"
                          />
                        </Link>
                      </td>

                      <td className="py-2 px-4 border-b text-center">
                        <button>
                          {order.status}
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-4">
            <div className="bg-[#F4991A] border-1 border-[#321313] rounded-md p-2 mb-4 sm:mb-0 max-w-xs">
              <span className="text-[#321313] font-bold">
                Today&apos;s Total:
              </span>{" "}
              {totalAmount.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </div>
            <button
              onClick={() => window.print()}
              className="w-24 text-[#321313] font-bold bg-[#F4991A] rounded-md"
            >
              Print
            </button>
          </div>
        </div>
      </BackgroundAbout>
    </div>
  );
};

Report.propTypes = {
  orders: PropTypes.array,
};

export default Report;
