import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '5042b23959msh52144220652a946p1e7531jsn8677d8483c9d'
}

const baseUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)    
       }),

       getCryptoHistory: builder.query({
        query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)    
   }),

       getExchanges: builder.query({
         query: () => createRequest('/exchanges')
  }),  
  }),
});

export const { 
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi ;

    

