import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { paths } from './index.js';

const getAuthHeader = (headers, { getState }) => {
  const { auth } = getState();
  const { token } = auth;

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return headers;
};

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: '/',
    prepareHeaders: getAuthHeader,
  });

  return baseQuery(args, api, extraOptions);
};

const apiClient = createApi({
  reducerPath: 'apiClient',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: paths.login(),
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: paths.signup(),
        method: 'POST',
        body: data,
      }),
    }),
    getChannels: builder.query({
      query: () => ({
        url: paths.channels(),
      }),
    }),
    getChannelById: builder.query({
      query: (id) => ({
        url: `${paths.channels()}/${id}`,
      }),
    }),
    addChannel: builder.mutation({
      query: (channel) => ({
        url: paths.channels(),
        method: 'POST',
        body: channel,
      }),
    }),
    editChannel: builder.mutation({
      query: (channel) => ({
        url: `${paths.channels()}/${channel.id}`,
        method: 'PATCH',
        body: channel,
      }),
    }),
    removeChannel: builder.mutation({
      query: (id) => ({
        url: `${paths.channels()}/${id}`,
        method: 'DELETE',
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: paths.messages(),
      }),
    }),
    addMessage: builder.mutation({
      query: (message) => ({
        url: paths.messages(),
        method: 'POST',
        body: message,
      }),
    }),
    removeMessage: builder.mutation({
      query: (id) => ({
        url: `${paths.messages()}/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetChannelsQuery,
  useGetChannelByIdQuery,
  useAddChannelMutation,
  useEditChannelMutation,
  useRemoveChannelMutation,
  useGetMessagesQuery,
  useAddMessageMutation,
  useRemoveMessageMutation,
} = apiClient;

export default apiClient;
