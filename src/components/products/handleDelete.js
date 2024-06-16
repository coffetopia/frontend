import Swal from "sweetalert2";
import axios from "../../api/axios";

export function handleDeleteProduct(product, setProducts) {
  Swal.fire({
    title: `Anda yakin ingin menghapus menu ${product.name}?`,
    showCancelButton: true,
    cancelButtonText: 'Batal',
    confirmButtonText: 'Yakin',
  }).then( async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/products/${product.id}`);
        Swal.fire({
          title: `${product.name} berhasil dihapus`,
          text: response.data.message,
          icon: 'success',
        });
        setProducts(prevProducts => prevProducts.filter((i) => i.id !== product.id));
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: `${product.name} gagal dihapus`,
          text: error.response.data.message,
          icon: 'error',
        });
      }
    }
  });
}

export function handleDeleteCategory(category, setCategories, setProducts) {
  Swal.fire({
    title: `Anda yakin ingin menghapus category ${category.name}?`,
    text: 'Jika anda menghapus kategori ini maka seluruh produk dalam kategori ini akan ikut terhapus',
    showCancelButton: true,
    cancelButtonText: 'Batal',
    confirmButtonText: 'Yakin',
  }).then( async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/categories/${category.id}`);
        Swal.fire({
          title: `${category.name} berhasil dihapus`,
          text: response.data.message,
          icon: 'success',
        });
        setCategories(prevProducts => prevProducts.filter((i) => i.id !== category.id));
        setProducts(prevProducts => prevProducts.filter((i) => i.category_id !== category.id));
      } catch (error) {
        console.error(error);
        Swal.fire({
          title: `${category.name} gagal dihapus`,
          text: error.response.data.message,
          icon: 'error',
        });
      }
    }
  });
}