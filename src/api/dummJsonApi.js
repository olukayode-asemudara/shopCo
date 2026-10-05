import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_APP_BASEURL;

export const dummyJsonData = createApi({
  reducerPath: "dummyJsonApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),

    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    login: builder.mutation({
      // mutation: ()
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = dummyJsonData;
