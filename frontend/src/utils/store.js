import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/authSlice.js';
import selectedChannelReducer from '../store/slices/channelSlice.js';
import modalReducer from '../store/slices/modalSlice.js';
import apiClient from '../store/apiClient.js';

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
