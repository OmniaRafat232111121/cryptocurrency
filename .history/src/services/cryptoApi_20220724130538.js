import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
const baseUrl='https://coinranking1.p.rapidapi.com'
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails:builder.query(
      query:(coinId)=>create
    )
    
  }),
});

export const {
  useGetCryptosQuery,
  
} = cryptoApi;