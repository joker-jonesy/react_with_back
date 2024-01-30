import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const api = createApi({
    tagTypes:['tag'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_URL||"http://localhost:8085",
    }),
    endpoints: (builder)=>({
        getSets: builder.query({
            query: ()=> '/api/sets',
        }),
        getSet: builder.query({
            query: (id)=> '/api/sets/'+id
        }),
    })
});

export const {useGetSetsQuery, useGetSetQuery}= api;
