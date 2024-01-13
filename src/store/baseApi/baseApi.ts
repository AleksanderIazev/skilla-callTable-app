import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../../constants/constants';
import { prepareHeadersForBaseQuery } from '../../helpers/api.helper';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL, prepareHeaders: prepareHeadersForBaseQuery }),
    endpoints: builder => ({}),
});
