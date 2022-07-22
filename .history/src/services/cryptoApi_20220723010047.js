import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  : 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  'x-rapidapi-key': 'https://coinranking2.p.rapidapi.com',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

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