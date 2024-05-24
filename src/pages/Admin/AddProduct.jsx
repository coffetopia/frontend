import React from "react";
import AdminNavbar from "../../components/navbar/AdminNavbar";
import BackgroundAbout from "../../components/background/BackgroundAbout";

const AddProduct = () => {
  return (
    <div className="font-poppins">
      <AdminNavbar />
      <BackgroundAbout>
        <div className="container py-20 px-4 sm:px-0">
          <div className="p-4">
            <div className="p-4 bg-white border-1 border-[#321313] rounded-md mt-0">
              <h3 className="text-xl text-center text-[#321313] font-bold mb-0 p-4">
                Add Product
              </h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#321313] font-bold">Name:</label>
                <input type="text" id="name" placeholder="enter your product name" className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313]   rounded-md p-3 md:p-4  focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-[#321313] font-bold">Price:</label>
                <input type="text" id="price" placeholder="enter your product prince" className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313]   rounded-md p-3 md:p-4  focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-[#321313]"></label>
                <input type="file" id="image" className="border rounded px-2 py-1" />
              </div>
              <div className="mb-4">
                <button className="w-full text-white bg-[#591E0A] font-bold rounded-md p-3 md:p-3 text-center flex items-center justify-center mb-4"
                >Add Product</button>
                <button className="w-full text-[#321313] font-bold bg-[#F4991A] rounded-md p-3 md:p-3 text-center flex items-center justify-center"
                >Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundAbout>
    </div>
  );
};

export default AddProduct;
