import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsThunk from "./productThunk";

type State = {
  product: any | null;
  products: any;
  featured: any[] | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string | unknown;
};

const initialState: State = {
  product: null,
  products: [],
  featured: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeaturedProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.featured = Array.isArray(action.payload) ? action.payload : null;
      })
      .addCase(getFeaturedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = Array.isArray(action.payload) ? action.payload : null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const getFeaturedProducts = createAsyncThunk(
  "products/getFeaturedProducts",
  async (_, thunkAPI) => {
    try {
      return await productsThunk.GET_FEATURED_PRODUCTS_THUNK();
    } catch (error) {
      console.log({ error });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      return await productsThunk.GET_ALL_PRODUCTS_THUNK();
    } catch (error) {
      console.log({ error });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// const API = process.env.SERVER_URL;

// export const getFeaturedProducts = createAsyncThunk(
//   "products/getFeaturedProducts",
//   async () => {
//     try {
//       const response = await axios.get(`${API}/products?featured=true`);
//       return response.data.products;
//     } catch (error) {
//       console.log({ error });
//     }
//   }
// );
export const {} = productSlice.actions;
export default productSlice.reducer;
