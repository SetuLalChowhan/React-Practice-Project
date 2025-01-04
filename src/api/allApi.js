import axiosInstance from "./axiosInstance";

export const fetchProducts = async ({ limit, skip }) => {
  try {
    const response = await axiosInstance.get(
      `/products/?limit=${limit}&skip=${skip}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const searchApi = async (search) => {
  try {
    const response = await axiosInstance.get(`/products/search?q=${search} `);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
