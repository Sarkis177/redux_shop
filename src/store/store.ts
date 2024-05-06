import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './product/modal.slice'
// import productReducer from './product/product.slice'




export const store = configureStore({
    reducer: {
      modal: modalReducer,
      // product: productReducer,
    },
  })
  
  
  export type RootState = ReturnType<typeof store.getState>

  export type AppDispatch = typeof store.dispatch