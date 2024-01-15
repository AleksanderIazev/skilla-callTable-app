import { baseApi } from '../baseApi/baseApi';

export const callApi = baseApi.injectEndpoints({
    endpoints: build => ({
        fetchCalls: build.query({
            query: sort => ({
                url: 'getList',
                method: 'POST',
                params: sort,
            }),
        }),
        fetchRecord: build.mutation({
            query: recordId => ({
                url: 'getRecord',
                method: 'POST',
                params: {
                    record: recordId,
                },
                headers: {
                    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
                    'Content-Transfer-Encoding': 'binary',
                    'Content-Disposition': 'filename="record.mp3"',
                },
                responseHandler: response => response.blob(),
            }),
            transformResponse: (response: Blob) => URL.createObjectURL(response),
        }),
    }),
});

export const { useFetchCallsQuery, useFetchRecordMutation } = callApi;
