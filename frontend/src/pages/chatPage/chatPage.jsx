import Layout from '../../components/layout.jsx';
import ChatContainer from './components/chatContainer';
import Channels from './components/channels';
import Messages from './components/messages';
import SendForm from './components/sendForm';

const ChatPage = () => (
  <Layout>
    <ChatContainer>
      <Channels />
      <Messages>
        <SendForm />
      </Messages>
    </ChatContainer>
  </Layout>
);

export default ChatPage;
