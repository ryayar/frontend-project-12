import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChannels } from '../slices/channelsSlice';
import { fetchMessages } from '../slices/messagesSlice';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ChannelsList from '../components/ChannelsList';
import MessagesWindow from '../components/MessagesWindow';

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
    <Container fluid className="vh-100 d-flex flex-column">
      <Row className="bg-light py-2 shadow-sm">
        <Col>
          <h4 className="m-0">Hexlet Chat</h4>
        </Col>
        <Col xs="auto">
          <Button variant="primary">Выйти</Button>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col md={3} className="bg-white border-end p-3">
          <ChannelsList channels={channels} />
        </Col>
        <Col md={9} className="p-3 bg-white">
          <MessagesWindow messages={messages} />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
