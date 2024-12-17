import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const MessagesWindow = ({ messages }) => (
  <div className="d-flex flex-column h-100">
    <div className="flex-grow-1 overflow-auto p-2">
      {messages.map((message) => (
        <div key={message.id} className="mb-2">
          {message.text || message.body}
        </div>
      ))}
    </div>
    <Form className="d-flex border-top p-2 bg-light">
      <Form.Control placeholder="Введите сообщение..." />
      <Button variant="primary" className="ms-2">
        &#10148;
      </Button>
    </Form>
  </div>
);

MessagesWindow.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string,
      body: PropTypes.string,
    })
  ).isRequired,
};

export default React.memo(MessagesWindow);
