import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice.js';
import selectedChannelReducer from '../slices/channelSlice.js';
import modalReducer from '../slices/modalSlice.js';
import channelsApi from '../api/channelsApi.js';
import messagesApi from '../api/messagesApi.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    selectedChannel: selectedChannelReducer,
    modal: modalReducer,
    [channelsApi.reducerPath]: channelsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(channelsApi.middleware, messagesApi.middleware),
});
