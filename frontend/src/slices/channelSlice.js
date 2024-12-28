/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedChannel: {
    id: '1',
    name: 'general',
    removable: false,
  },
};

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setSelectedChannel: (state, action) => {
      const channel = action.payload;
      state.selectedChannel = channel;
      return state;
    },
  },
});

export const { setSelectedChannel } = channelSlice.actions;

export default channelSlice.reducer;
