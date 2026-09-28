import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),

     tagTypes: ["Products"],

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),

          addProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct,
            }),
            invalidatesTags: ["Products"],
        }),
        
    }),
});

// Auto-generated hook
export const { useGetProductsQuery } = productApi;