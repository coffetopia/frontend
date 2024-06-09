import { useNavigate, useParams } from "react-router-dom";
import BackgroundAbout from "../../components/background/BackgroundAbout";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category_id: ''
  });
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        const responseCat = await axios.get('/categories');
        setCategories(responseCat.data.payload);
        setProduct(response.data.payload);
      } catch (error) {
        console.error(error);
        navigate(-1);
      }
    }
    fetchData();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/products/${id}`, product);
      navigate('/products');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleCancel = () => {
    navigate('/products');
  };

  return (
    <div className="font-poppins">
      <BackgroundAbout>
        <div className="container py-20 px-4 sm:px-0">
          <div className="p-4">
            <div className="p-4 bg-white border-1 border-[#321313] rounded-md mt-0">
              <h3 className="text-xl text-center text-[#321313] font-bold mb-0 p-4">
                Update Product
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#321313] font-bold">Name:</label>
                  <input
                    onChange={handleChange}
                    value={product.name}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="enter your product name"
                    className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-[#321313] font-bold">Price:</label>
                  <input
                    onChange={handleChange}
                    value={product.price}
                    type="text"
                    id="price"
                    name="price"
                    placeholder="enter your product price"
                    className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-[#321313] font-bold">Description:</label>
                  <textarea
                    onChange={handleChange}
                    name="description"
                    id="description"
                    value={product.description}
                    className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-[#321313] font-bold">Category:</label>
                  <select
                    onChange={handleChange}
                    value={product.category_id}
                    name="category_id"
                    id="category"
                    className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500"
                  >
                    {categories.map((category, index) => (
                      <option key={index} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-[#321313] font-bold">Image:</label>
                  <input type="file" id="image" className="border rounded px-2 py-1" />
                </div>
                <div className="mb-4">
                  <button type="submit" className="w-full text-white bg-[#591E0A] font-bold rounded-md p-3 md:p-3 text-center flex items-center justify-center mb-4">
                    Update Product
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="w-full text-[#321313] font-bold bg-[#F4991A] rounded-md p-3 md:p-3 text-center flex items-center justify-center"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </BackgroundAbout>
    </div>
  );
};

export default UpdateProduct;
