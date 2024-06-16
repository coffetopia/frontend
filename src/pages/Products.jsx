import { useState, useEffect } from "react";
// Asset
import axios from "../api/axios";
import CategoryList from "../components/products/CategoryList";
import FavoriteProducts from "../components/products/FavoriteProducts";
import ProductList from "../components/products/ProductList";
const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeComponent, setActiveComponent] = useState('');
  const [objectCategory, setObjectCategory] = useState(null);
  const isAdmin = localStorage.getItem("role") == "admin" ? true : false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/categories");
        const categories = response.data.payload;
        setCategories(categories);
        setActiveComponent(categories[0]?.name);
        setObjectCategory(categories[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/products/category${objectCategory ? `/${objectCategory?.id}` : ""}`
        );
        const productsApi = response.data.payload;
        setProducts(productsApi);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [objectCategory]);

  const handleCategoryClick = (category) => {
    setActiveComponent(category.name);
    setObjectCategory(category);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-8">
      {/* Favorite Menu or Category List */}
      {localStorage.getItem("role") != "admin" ? (
        <FavoriteProducts />
      ) : (
        <CategoryList setProducts={setProducts} setActiveComponent={setActiveComponent} />
      )}
      {/* Content Menu*/}
      <div
        className={`${
          localStorage.getItem("role") == "admin"
            ? "sm:basis-3/4"
            : "sm:basis-2/3"
        } flex flex-col mt-5 sm:mt-0 p-3`}
      >
        {/* Categories button */}
        <div className="flex h-[50px] w-full sm:w-[70%] justify-evenly items-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`mx-2 text-base sm:text-lg ${
                activeComponent == category.name
                  ? "font-medium text-primary border-b border-primary"
                  : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <ProductList products={products} setProducts={setProducts} isAdmin={isAdmin} />
      </div>
    </div>
  );
};

export default Products;
