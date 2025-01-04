import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import apiClient, { useGetMessagesQuery } from '../../../store/utils/apiClient.js';
import { getSelectedChannel } from '../../../store/slices/selectors';
import { SocketContext } from '../../../store/utils/socketService.js';

const Messages = ({ children }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data = [] } = useGetMessagesQuery();
  const selectedChannel = useSelector(getSelectedChannel);
  const selectedChannelMessages = data.filter(({ channelId }) => channelId === selectedChannel.id);

  const socketService = useContext(SocketContext);

  useEffect(() => {
    const updateMessages = (newMessage) => {
      dispatch(apiClient.util.updateQueryData('getMessages', undefined, (draftMessages) => {
        draftMessages.push(newMessage);
      }));
    };

    socketService.on('newMessage', updateMessages);

    return () => {
      socketService.off('newMessage');
    };
  }, [socketService, dispatch]);

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{`# ${selectedChannel.name}`}</b>
          </p>
          <span className="text-muted">
            {t('chatPage.messagesCount', { count: selectedChannelMessages.length })}
          </span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5 ">
          {selectedChannelMessages
            .map(({ id, body, username }) => (
              <div key={id} className="text-break mb-2">
                <b>{username}</b>
                {': '}
                {body}
              </div>
            ))}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Messages;
