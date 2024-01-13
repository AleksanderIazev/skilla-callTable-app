import { baseApi } from '../baseApi/baseApi';

export const callApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchCalls: build.query({
            query: () => ({
                url: 'getList',
                method: 'POST',
            }),
        }),
    }),
});

export const { useFetchCallsQuery } = callApi;
