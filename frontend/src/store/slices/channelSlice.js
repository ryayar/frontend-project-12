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
    setSelectedChannel: (state, action) => ({
      ...state,
      selectedChannel: action.payload,
    }),
  },
});

export const { setSelectedChannel } = channelSlice.actions;

export default channelSlice.reducer;
