import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product`,
  }),

  endpoints: (builder) => ({
    latestProduct: builder.query({
      query: () => ({
        url: "latest",
        method: "GET",
      }),
    }),
  }),
});

export const { useLatestProductQuery } = productApi;
