import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  username: localStorage.getItem('username'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      state.token = token;

      localStorage.setItem('token', token);
    },
    setUsername: (state, action) => {
      const username = action.payload;
      state.username = username;

      localStorage.setItem('username', username);
    },
    deleteAuthorization: (state) => {
      state.token = null;
      state.username = null;

      localStorage.removeItem('token');
      localStorage.removeItem('username');
    },
  },
});

export const { setToken, setUsername, deleteAuthorization } = authSlice.actions;

export default authSlice.reducer;
