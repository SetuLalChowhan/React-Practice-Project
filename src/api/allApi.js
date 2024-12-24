import axiosInstance from "./axiosInstance";

export const fetchProducts = async ({limit,skip}) => {
  try {
    const response = await axiosInstance.get(
      `/products/?limit=${limit}&skip=${skip}`
    );
   console.log(response.data.products)
    return response.data.products
  } catch (err) {
    console.log(err);
  }
};


