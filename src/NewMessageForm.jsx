import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import NewMessageControl from './NewMessageControl';

function NewMessageForm(props){
console.log("hi", props);
  let _names = null;
  let _messages = null;

  function handleNewMessageFormSubmission(event) {
    event.preventDefault();
    props.onNewMessageCreation({names: _names.value,  messages: _messages.value, id: v4()});
   _names.value = '';
   _messages.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewMessageFormSubmission}>
    <input
    type='text'
    id='names'
    placeholder='Your Name'
    ref={(input) => {_names = input;}}/>
    <br/><br/><br/>
    <textarea
    id='messages'
    placeholder='Describe your message.'
    ref={(textarea) => {_messages = textarea;}}/>
    <br/><br/><br/>
    <button type='submit'>Leave Message!</button>
    </form>
    </div>
  );
}

NewMessageForm.propTypes = {
  onNewMessageCreation: PropTypes.func
};

export default NewMessageForm;
