import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { paths } from '../utils';
import getAuthHeader from '../utils/getAuthHeader';

const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery({
    baseUrl: paths.channels(),
    prepareHeaders: getAuthHeader,
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
    }),
    getChannelById: builder.query({
      query: (id) => ({
        url: id,
      }),
    }),
    addChannel: builder.mutation({
      query: (channel) => ({
        method: 'POST',
        body: channel,
      }),
    }),
    editChannel: builder.mutation({
      query: (channel) => ({
        url: channel.id,
        method: 'PATCH',
        body: channel,
      }),
    }),
    removeChannel: builder.mutation({
      query: (id) => ({
        url: id,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useGetChannelByIdQuery,
  useAddChannelMutation,
  useEditChannelMutation,
  useRemoveChannelMutation,
} = channelsApi;

export default channelsApi;
