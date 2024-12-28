import PageContainer from '../../components/pageContainer';
import Navbar from '../../components/navbar';
import ChatContainer from './components/chatContainer';
import Channels from './components/channels';
import Messages from './components/messages';
import SendForm from './components/sendForm';

const ChatPage = () => (
  <PageContainer>
    <Navbar />
    <ChatContainer>
      <Channels />
      <Messages>
        <SendForm />
      </Messages>
    </ChatContainer>
  </PageContainer>
);

export default ChatPage;
