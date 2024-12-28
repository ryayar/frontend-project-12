import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: '',
  editedChannelId: '',
  editedChannelName: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => {
      const { activeModal, editedChannelId, editedChannelName } = action.payload;
      return {
        ...state,
        activeModal,
        editedChannelId,
        editedChannelName,
      };
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
