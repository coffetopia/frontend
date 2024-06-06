import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundAbout from "../../components/background/BackgroundAbout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Report.css'; // Import your CSS file

const Report = ({ orders: initialOrders }) => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState(initialOrders || []);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [searchId, setSearchId] = useState('');
    const [totalToday, setTotalToday] = useState(0);
    const [checkedOrders, setCheckedOrders] = useState(
        JSON.parse(localStorage.getItem('checkedOrders')) || {}
    );

    useEffect(() => {
        // Hitung jumlah total uang yang diperoleh hari ini
        const today = new Date().toISOString().split('T')[0];
        const todayOrders = orders.filter(order => order.date === today);
        const total = todayOrders.reduce((acc, cur) => acc + cur.totalPrice, 0);
        setTotalToday(total);
    }, [orders]);

    useEffect(() => {
        // Menyimpan status checkbox ke localStorage saat berubah
        localStorage.setItem('checkedOrders', JSON.stringify(checkedOrders));
    }, [checkedOrders]);

    const handleCheckboxChange = (id) => {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {
                order.status = !checkedOrders[id];
            }
            return order;
        });

        setOrders(updatedOrders);

        setCheckedOrders(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    // Data dummy untuk ditampilkan jika orders kosong
    const dummyData = [
        { id: 1, date: '2024-06-05', time: '10:00', name: 'John Doe', totalPrice: 30000, status: true },
        { id: 2, date: '2024-06-05', time: '11:00', name: 'Jane Smith', totalPrice: 40000, status: false },
        { id: 3, date: '2024-06-05', time: '12:00', name: 'Sarah Joe', totalPrice: 50000, status: false },
        { id: 4, date: '2024-06-05', time: '13:00', name: 'celsy swis', totalPrice: 60000, status: false },
        // Tambahkan data dummy lainnya jika diperlukan
    ];

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
                            <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
                        </div>
                        <div className="flex flex-col sm:flex-row items-left">
    <span className="mr-2 text-[#321313] font-bold">Search:</span>
    <div className="search-container">
        <input type="text" placeholder="Search by order ID..." value={searchId} onChange={(e) => setSearchId(e.target.value)} className="search-input" />
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
        {(orders && orders.length > 0 ? orders : dummyData).map((order, index) => (
            <tr key={order.id} className={order.id === parseInt(searchId) ? 'bg-orange-200' : ''}>
                <td className="text-center py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{order.date}</td>
                <td className="text-center py-2 px-4 border-b">{order.time}</td>
                <td className=" text-center py-2 px-4 border-b">{order.name}</td>
                <td className="py-2 px-4 border-b">{order.totalPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                <td className="py-2 px-4 border-b text-center">
    <Link to={`/orders`} className="link-detail text-[#321313] font-bold bg-[#F4991A] rounded-md p-1 w-6 md:p-1 text-center flex items-center justify-center">
        <FontAwesomeIcon icon={faInfoCircle} className="fa-icon" />
    </Link>
</td>

<td className="py-2 px-4 border-b text-center">
    <label className="inline-flex items-center">
        <input
            type="checkbox"
            className="custom-checkbox"
            checked={checkedOrders[order.id] || false}
            onChange={() => handleCheckboxChange(order.id)}
            disabled={checkedOrders[order.id] || false}
        />
    </label>
</td>




            </tr>
        ))}
    </tbody>
</table>

                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-4">
                        <div className="bg-[#F4991A] border-1 border-[#321313] rounded-md p-2 mb-4 sm:mb-0 max-w-xs">
                            <span className="text-[#321313] font-bold">Today's Total:</span> {totalToday.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                        </div>
                    <button onClick={() => window.print()} className="w-24 text-[#321313] font-bold bg-[#F4991A] rounded-md">
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
