import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchallProducts , fetchProductsByFilter } from './ProductApi';

const initialState = {
  products : [],
  status: 'idle',
};

export const fetchallProductsAsync = createAsyncThunk(
  'product/fetchallProducts',
  async()=>{
    const response = await fetchallProducts()
    return response.data;
  }
)
export const fetchProductsByFilterAsync = createAsyncThunk(
  'product/fetchProductsByFilter',
  async(filter)=>{
    const response = await fetchProductsByFilter(filter);
    return response.data;
  }
)

export const ProductSlice = createSlice({
  name : 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchallProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchallProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const { increment } = ProductSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default ProductSlice.reducer;
