import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchallProducts , fetchBrands, fetchCategories, fetchProductsByFilter, selectedProductDetailById } from './ProductApi';

const initialState = {
  products : [],
  status: 'idle',
  totalProducts : 0,
  Brands : [],
  Categories : [],
  selectedProduct : null
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
  async({filter, sort, pagination})=>{
    const response = await fetchProductsByFilter(filter, sort, pagination);
    return response.data;
  }
)
export const fetchCategoriesAsync = createAsyncThunk(
  'product/fetchCategories',
  async()=>{
    const response = await fetchCategories();
    return response.data;
  }
)
export const SelectedProductByidAsync = createAsyncThunk(
  'product/selectedProductDetailById',
  async(id)=>{
    const response = await selectedProductDetailById(id);
    return response.data;
  }
)
export const fetchBrandsAsync = createAsyncThunk(
  'product/fetchBrands',
  async()=>{
    const response = await fetchBrands();
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
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.Categories = action.payload;
      })
      .addCase(SelectedProductByidAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(SelectedProductByidAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalProducts = action.payload.totalProducts;
      });
  },
});

export const { increment } = ProductSlice.actions;

export const selectAllProducts = (state) => state.product.products;
export const selectTotalProducts = (state) => state.product.totalProducts;
export const selectBrands = (state) => state.product.Brands;
export const selectCategories = (state) => state.product.Categories;
export const selectedProduct = (state) => state.product.selectedProduct;

export default ProductSlice.reducer;
