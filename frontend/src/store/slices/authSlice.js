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
      localStorage.setItem('token', token);

      return {
        ...state,
        token,
      };
    },
    setUsername: (state, action) => {
      const username = action.payload;
      localStorage.setItem('username', username);

      return {
        ...state,
        username,
      };
    },
    deleteAuthorization: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');

      return {
        token: null,
        username: null,
      };
    },
  },
});

export const { setToken, setUsername, deleteAuthorization } = authSlice.actions;

export default authSlice.reducer;
