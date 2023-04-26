import axios from "axios";

const API = process.env.SERVER_URL;

const GET_FEATURED_PRODUCTS_THUNK = async () => {
  const response = await axios.get(`${API}/products?featured=true`);
  // console.log("THUNK", response.data.products);
  return response.data.products;
};

const GET_ALL_PRODUCTS_THUNK = async () => {
  const response = await axios.get(`${API}/products`);
  // console.log("THUNK", response.data.products);
  return response.data.products;
};

const productsThunk = {
  GET_FEATURED_PRODUCTS_THUNK,
  GET_ALL_PRODUCTS_THUNK,
};

export default productsThunk;
