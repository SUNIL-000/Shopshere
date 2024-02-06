import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/api/v1/product/`,
  }),

  endpoints:  (builder) => ({
    latestProduct: builder.query({
      query: () => ({
        url: "latest",
        method: "GET",
      }),
    }),
    createProduct:builder.mutation({
      query: ({product})=>({
        url:"new",
        method:"POST",
        body:product,
      })
    })
  }),
});

export const { useLatestProductQuery ,useCreateProductMutation } = productApi;
