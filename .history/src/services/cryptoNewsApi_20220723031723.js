import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders={
   
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '878f45e1a8msh8bfaf3e377f7cf6p1e5423jsn6fa1e000179d',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      
}
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl='https://bing-news-search1.p.rapidapi.com/news'

}),
  });