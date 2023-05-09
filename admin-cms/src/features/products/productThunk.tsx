import axios, { AxiosError } from "axios";

const API = process.env.SERVER_URL;

const GET_FEATURED_PRODUCTS_THUNK = async () => {
  try {
    const response = await axios.get(`${API}/products?featured=true`);
    return response.data.products;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(
      "RESPONSE ERROR TO FEATURED PRODUCTS ",
      axiosError.response?.data
    );
    throw axiosError.response?.data;
  }
  // console.log("THUNK", response.data.products);
};

const GET_ALL_PRODUCTS_THUNK = async () => {
  try {
    const response = await axios.get(`${API}/products`);
    return response.data.products;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log(
      "RESPONSE ERROR TO FEATURED PRODUCTS ",
      axiosError.response?.data
    );
    throw axiosError.response?.data;
  }
};

const productsThunk = {
  GET_FEATURED_PRODUCTS_THUNK,
  GET_ALL_PRODUCTS_THUNK,
};

export default productsThunk;
