import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import messagesApi, { useGetMessagesQuery } from '../../../api/messagesApi';
import { getSelectedChannel } from '../../../slices/selectors';

const Messages = ({ children }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data = [] } = useGetMessagesQuery();
  const selectedChannel = useSelector(getSelectedChannel);
  const selectedChannelMessages = data.filter(({ channelId }) => channelId === selectedChannel.id);

  useEffect(() => {
    const updateMessages = (newMessage) => {
      dispatch(messagesApi.util.updateQueryData('getMessages', undefined, (draftMessages) => {
        draftMessages.push(newMessage);
      }));
    };

    const socket = io();

    socket.on('newMessage', (payload) => {
      updateMessages(payload);
    });

    return () => { socket.off('newMessage'); };
  }, [dispatch]);

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
