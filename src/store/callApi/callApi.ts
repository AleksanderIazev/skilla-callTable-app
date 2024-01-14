import { baseApi } from '../baseApi/baseApi';

export const callApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchCalls: build.query({
            query: (sort) => ({
                url: 'getList',
                method: 'POST',
                params: sort
            }),
        }),
    }),
});

export const { useFetchCallsQuery } = callApi;
