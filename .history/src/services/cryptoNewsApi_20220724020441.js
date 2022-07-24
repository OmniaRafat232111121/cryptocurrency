import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
   

  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
      
}
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl='https://bing-news-search1.p.rapidapi.com/news'

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



  REACT_APP_RAPIDAPI_KEY =  'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'
  REACT_APP_CRYPTO_API_URL = 'https://coinranking1.p.rapidapi.com'
  REACT_APP_NEWS_API_URL = 'https://bing-news-search1.p.rapidapi.com'
  REACT_APP_NEWS_RAPIDAPI_HOST = 'bing-news-search1.p.rapidapi.com'
   REACT_APP_CRYPTO_RAPIDAPI_HOST ='coinranking1.p.rapidapi.com'
  
