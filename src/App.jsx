import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Products from "./pages/Products";
import { useEffect } from "react";

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
  });
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
