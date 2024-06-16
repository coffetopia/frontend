/* eslint-disable react/prop-types */
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { handleDeleteCategory } from "./handleDelete";

export default function CategoryList({ setProducts }) {
  const navigate = useNavigate();
  const [categories, setCaategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/categories");
        const categories = response.data.payload;
        setCaategories(categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="basis-1/4 flex flex-col p-4 space-y-4">
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => navigate("/addcategory")}
          className="bg-[#F4991A] border-1 border-[#321313] p-4 rounded text-[#321313] font-bold"
        >
          Add Category
        </button>
        <button
          onClick={() => navigate("/addproduct")}
          className="bg-[#F4991A] border-1 border-[#321313] p-4 rounded text-[#321313] font-bold"
        >
          Add Product
        </button>
      </div>
      <div className="text-center space-y-2">
        <p className="font-bold">Kategori</p>
        {categories.map((category, index) => (
          <div key={index} className="grid grid-cols-2 gap-2">
            <button className="p-2 font-medium text-[#591E0A] border border-[#591E0A] rounded">
              {category.name}
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => navigate(`/category/update/${category.id}`)}
                className="bg-[#3fff00] rounded"
              >
                <FontAwesomeIcon icon={faPencil} />
              </button>
              <button onClick={() => handleDeleteCategory(category, setCaategories, setProducts)} className="bg-[#F41A1A] rounded">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
