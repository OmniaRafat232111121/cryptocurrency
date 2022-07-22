import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
cons
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/coins`),
    }),

    
  }),
});

export const {
  useGetCryptosQuery,
  
} = cryptoApi;