import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ChannelsList = ({ channels }) => (
  <div>
    <h5>Каналы</h5>
    <ListGroup>
      {channels.map((channel) => (
        <ListGroup.Item key={channel.id} action>
          #{channel.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

ChannelsList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(ChannelsList);
