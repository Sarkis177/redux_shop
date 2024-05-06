import { createSlice } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';

const initialState: ProductStateModel = {
    products: [],
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {},
    },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
