import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import selectedChannelReducer from './slices/channelSlice.js';
import modalReducer from './slices/modalSlice.js';
import apiClient from './apiClient.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    selectedChannel: selectedChannelReducer,
    modal: modalReducer,
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiClient.middleware),
});
