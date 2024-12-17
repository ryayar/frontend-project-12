import { configureStore } from '@reduxjs/toolkit';
import channelsReducer from './channelsSlice.js';
import messagesReducer from './messagesSlice.js';

export const store = configureStore({
  reducer: {
    channels: channelsReducer,
    messages: messagesReducer,
  },
});
