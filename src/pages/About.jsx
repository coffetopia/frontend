import React from "react";
import { useNavigate } from "react-router-dom";
import cafe from "../assets/cafe.png";
import time from "../assets/jam.jpg";
import NavbarComponents from "../components/navbar/NavbarComponents"; // Pastikan import path benar
import BackgroundAbout from "../components/background/BackgroundAbout"; // Pastikan import path benar

const About = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="font-poppins">
      <NavbarComponents /> {/* Tambahkan Navbar di sini */}
      <BackgroundAbout>
        <div className="container mx-auto pt-10 pb-8 sm:pb-0">
          {" "}
          {/* Tambahkan margin auto untuk sentralisasi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Text content section */}
            <div className="order-2 sm:order-1 flex flex-col justify-center gap-4 -mt-10 p-4 sm:p-0">
              {" "}
              {/* Tambahkan padding untuk margin responsif */}
              <div className="flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold pt-0">
                  Coffeetopia
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-[#321313] font-bold">
                  Merayakan Kenikmatan Kopi dari Ujung ke Ujung Dunia
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-[#321313] font-bold">
                  Welcome to Coffetopia, your ultimate coffee destination where
                  passion meets flavor. Founded in 2024, Coffetopia was born out
                  of a love for exceptional coffee and a desire to create a
                  community of coffee enthusiasts. Our mission is to bring the
                  finest coffee experience to everyone, from seasoned
                  connoisseurs to those just beginning their journey into the
                  world of coffee.
                </p>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              className="order-1 sm:order-2 flex justify-center items-center"
            >
              <img
                src={cafe}
                alt="Cafe"
                className="w-[200px] sm:w-[350px] lg:w-[450px] sm:scale-110 m-auto"
              />
            </div>
            <div
              data-aos="zoom-in"
              className="order-1 sm:order-2 flex justify-center items-center"
            >
              <img
                src={time}
                alt="time"
                className="w-[150px] sm:w-[250px] lg:w-[350px] sm:scale-80 m-auto"
              />
            </div>
          </div>
        </div>
      </BackgroundAbout>
    </div>
  );
};

export default About;
