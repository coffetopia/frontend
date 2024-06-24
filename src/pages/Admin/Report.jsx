import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BackgroundAbout from '../../components/background/BackgroundAbout';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Report.css';
import axios from '../../api/axios';
import moment from 'moment';

const Report = () => {
  const [orders, setOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchId, setSearchId] = useState('');
  const [checkedOrders, setCheckedOrders] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/orders');
        const data = response.data.payload;

        const sortedData = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const formattedData = sortedData.map((entry) => {
          const date = getFormattedDate(entry.createdAt);
          const time = getFormattedTime(entry.createdAt);
          return {
            ...entry,
            date,
            time,
          };
        });

        setOrders(formattedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  useEffect(() => {
    const savedCheckedOrders = {};
    orders.forEach((order) => {
      const status = localStorage.getItem(`order-${order.id}`) === 'true';
      savedCheckedOrders[order.id] = status;
    });
    setCheckedOrders(savedCheckedOrders);
  }, [orders]);

  function calculateTotalAmount(data) {
    return data.reduce((total, entry) => total + entry.amount, 0);
  }

  // const totalAmount = calculateTotalAmount(orders);

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

  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.createdAt);
    return orderDate.toDateString() === selectedDate.toDateString();
  });

  const filteredTotalAmount = calculateTotalAmount(filteredOrders);

  const handleCheckboxChange = (id) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        order.status = !order.status;
        localStorage.setItem(`order-${id}`, order.status);
      }
      return order;
    });

    setOrders(updatedOrders);

    setCheckedOrders((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="font-poppins">
      <BackgroundAbout>
        <div className="max-w-screen-lg p-4 mx-auto">
          <h3 className="text-xl text-[#321313] text-left font-bold">
            Table Report
          </h3>
          <div className="flex flex-col justify-between mt-4 sm:flex-row items-left">
            <div className="flex flex-col mb-4 sm:flex-row items-left sm:mb-0">
              <span className="mr-2 text-[#321313] font-bold">Date:</span>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className="flex items-center sm:flex-row items-left">
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
          <div className="mt-4 overflow-x-auto table-container">
            <table className="min-w-full bg-white border-1 border-[#321313] rounded-md table-report">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">No</th>
                  <th className="px-4 py-2 border-b">Order ID</th>
                  <th className="px-4 py-2 border-b">Date</th>
                  <th className="px-4 py-2 border-b">Time</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Total Price</th>
                  <th className="px-4 py-2 border-b">Detail</th>
                  <th className="px-4 py-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className={
                      order.id === parseInt(searchId) ? 'bg-orange-200' : ''
                    }
                  >
                    <td className="px-4 py-2 text-center border-b">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 text-center border-b">
                      {order.id}
                    </td>
                    <td className="px-4 py-2 border-b">{order.date}</td>
                    <td className="px-4 py-2 text-center border-b">
                      {moment(order.createdAt).format('HH:mm')}
                    </td>
                    <td className="px-4 py-2 text-center border-b">
                      {order.user?.username}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {order.amount.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                      })}
                    </td>
                    <td className="px-4 py-2 text-center border-b">
                      <Link
                        to={`/orders/${order.id}`} // Ensure this matches the route in your router
                        className="link-detail text-[#321313] font-bold bg-[#F4991A] rounded-md p-1 w-6 md:p-1 text-center flex items-center justify-center"
                      >
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="fa-icon"
                        />
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-center border-b">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          checked={checkedOrders[order.id] || false}
                          onChange={() => handleCheckboxChange(order.id)}
                        />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col justify-between mt-4 sm:flex-row">
            <div className="bg-[#F4991A] border-1 border-[#321313] rounded-md p-2 mb-4 sm:mb-0 max-w-xs">
              <span className="text-[#321313] font-bold">
                Today&apos;s Total:
              </span>{' '}
              {filteredTotalAmount.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
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

export default Report;
