import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
   
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d',
      
}
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl='https://bing-news-search1.p.rapidapi.com/'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;