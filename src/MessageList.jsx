import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

function MessageList(props){
  return (
    <div>
      <hr/>
      {props && props.masterMessageList.map((message, index) =>
        <Message names={message.names}
          messages={message.messages}
          key={index}/>
      )}
    </div>
  );
}

MessageList.propTypes = {
  messageList: PropTypes.array
};

export default MessageList;
