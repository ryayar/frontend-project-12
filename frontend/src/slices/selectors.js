import channelsApi from '../api/channelsApi';

const getSelectedChannelId = (state) => state.selectedChannel.selectedChannel.id;

const getChannels = (state) => channelsApi.endpoints.getChannels.select()(state).data;

const getEditedChannelId = (state) => state.modal.editedChannelId;

const getEditedChannelName = (state) => state.modal.editedChannelName;

const getToken = (state) => state.auth.token;

const getSelectedChannel = (state) => state.selectedChannel.selectedChannel;

const getUsername = (state) => state.auth.username;

const getActiveModal = (state) => state.modal.activeModal;

export {
  getSelectedChannelId,
  getChannels,
  getEditedChannelId,
  getEditedChannelName,
  getToken,
  getSelectedChannel,
  getUsername,
  getActiveModal,
};
