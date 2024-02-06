import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000/api/v1/user/` }),
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (user) => ({
          url: "new",
          method: "POST",
          body: user,
          
        }),
      }),
  }),
});

export const { useLoginMutation } = userApi;
