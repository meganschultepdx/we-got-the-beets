import React from 'react';
import PropTypes from 'prop-types';

function Message(props){


  return (
    <div>
      <h3>{props.names}</h3>
      <hr/>
    </div>
  );
}

Message.propTypes = {
  names: PropTypes.string.isRequired,
  messages: PropTypes.string.isRequired,
};

export default Message;
