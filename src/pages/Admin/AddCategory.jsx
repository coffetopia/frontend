import { useNavigate } from "react-router-dom";
import BackgroundAbout from "../../components/background/BackgroundAbout";

const AddCategory = () => {
  const navigate = useNavigate();

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
                Add Category
              </h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#321313] font-bold">Name:</label>
                <input type="text" id="name" placeholder="enter ur category name" className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block text-[#321313] font-bold">Deskripsi:</label>
                <input type="text" id="price" placeholder="enter ur category" className="w-full text-[#321313] py-1 md:py-2 bg-white border border-[#321313] rounded-md p-3 md:p-4 focus:border-indigo-500" />
              </div>
              
              <div className="mb-4">
                <button className="w-full text-white bg-[#591E0A] font-bold rounded-md p-3 md:p-3 text-center flex items-center justify-center mb-4">
                  Add Category
                </button>
                <button 
                  onClick={handleCancel}
                  className="w-full text-[#321313] font-bold bg-[#F4991A] rounded-md p-3 md:p-3 text-center flex items-center justify-center"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </BackgroundAbout>
    </div>
  );
};

export default AddCategory