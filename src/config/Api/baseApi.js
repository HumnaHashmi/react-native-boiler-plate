import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NavigationService } from '../navigation/navigationService';
import { logout } from '../store/slices/authSlice';

export const BASE_URL = 'http://192.168.3.238:4411/';
export const IMG_URL_BLOGS = 'http://216.108.238.109:2215/Uploads/Blogs/';
export const IMG_URL_USERS = 'http://216.108.238.109:2215/Uploads/Users/';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: async (args, api, extraOptions) => {
    const base = fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) headers.set('Authorization', `Bearer ${token}`);
        headers.set('Content-Type', 'application/json');
        return headers;
      },
    });

    const result = await base(args, api, extraOptions);

    if (result.error?.status === 401) {
      api.dispatch(logout());
      NavigationService.resetStack('AuthStack');
    }

    return result;
  },
  tagTypes: [],
  endpoints: () => ({}),
});
