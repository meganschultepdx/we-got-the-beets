import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewMessageForm(props){
console.log("hi", props);
  let _names = null;
  let _message = null;

  function handleNewMessageFormSubmission(event) {
    event.preventDefault();
    props.onNewMessageCreation({names: _names.value,  message: _message.value, id: v4()});
   _names.value = '';
   _message.value = '';
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
    id='message'
    placeholder='Describe your message.'
    ref={(textarea) => {_message = textarea;}}/>
    <br/><br/><br/>
    <button type='submit'>Help!</button>
    </form>
    </div>
  );
}

NewMessageForm.propTypes = {
  onNewMessageCreation: PropTypes.func
};

export default NewMessageForm;
