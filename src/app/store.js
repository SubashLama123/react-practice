import { configureStore } from "@reduxjs/toolkit";




export const store = configureStore({
  reducer: {
    productApi: productApi.reducer

  },


});