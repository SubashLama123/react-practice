import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),

    // Query to fetch a product by ID
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),

    // Mutation to delete a product by ID
    removeProductById: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),

  })

})

export const { useGetAllProductsQuery,
  useGetProductByIdQuery,
  useRemoveProductByIdMutation, } = productApi.reducer;