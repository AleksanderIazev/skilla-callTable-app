import { TOKEN } from '../constants/constants';

export const prepareHeadersForBaseQuery = (headers: Headers) => {
    headers.set('Authorization', `Bearer ${TOKEN}`);
    return headers;
};
