import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '5042b23959msh52144220652a946p1e7531jsn8677d8483c9d'
      
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});


export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi ;
