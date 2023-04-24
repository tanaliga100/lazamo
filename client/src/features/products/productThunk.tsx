import axios from "axios";

const API = process.env.SERVER_URL;

const CREATE_PRODUCT_THUNK = async (formData: any | void) => {
  const response = await axios.post(`${API}/products`, formData);
  return response.data;
};

const GET_ALL_PRODUCTS_THUNK = async () => {
  const response = await axios.get(`${API}/products`);
  return response.data;
};

const GET_FEATURED_PRODUCTS_THUNK = async () => {
  const response = await axios.get(`${API}/products`);
  console.log(response.data);
};

const productsThunk = {
  CREATE_PRODUCT_THUNK,
  GET_ALL_PRODUCTS_THUNK,
};
export default productsThunk;
