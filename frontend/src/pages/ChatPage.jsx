import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels } from '../slices/channelsSlice';
import { fetchMessages } from '../slices/messagesSlice';

const ChatPage = () => {
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels.channels);
  const messages = useSelector((state) => state.messages.messages);
  const channelsError = useSelector((state) => state.channels.error);
  const messagesError = useSelector((state) => state.messages.error);

  useEffect(() => {
    dispatch(fetchChannels());
    dispatch(fetchMessages());
  }, [dispatch]);

  if (channelsError || messagesError) {
    return <div>Ошибка загрузки данных: {channelsError || messagesError}</div>;
  }

  return (
    <div>
      <h1>Каналы</h1>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>

      <h2>Сообщения</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text || message.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;
