import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/product/productApi";



export const store = configureStore({
  reducer: {
    productApi: productApi.reducer

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    productApi.middleware
  ])

});