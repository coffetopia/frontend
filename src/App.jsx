import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Products from "./pages/Products";
import AdminProduct from "./pages/Admin/AdminProduct"; // Pastikan hanya ada satu deklarasi untuk AdminProduct
import AddProduct from "./pages/Admin/AddProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Orders from "./pages/Admin/Orders"; // Pastikan deklarasi Orders tidak tumpang tindih dengan AdminProduct
import Layout from "./pages/Layout";
import RequireAuth from "./pages/RequireAuth";
import PresistLogin from './components/PresistLogin';

const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      },
      []
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PresistLogin />}> 
            {/* public routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            
            {/* protect routes */}
            <Route element={<RequireAuth allowedRoles={['member', 'admin']} />} >
              <Route path="checkout" element={<Checkout />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={['admin']} />} >
              <Route path="adminproduct" element={<AdminProduct />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="updateproduct" element={<UpdateProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
