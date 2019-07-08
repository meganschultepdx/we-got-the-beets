import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewMessageForm(props){

  let _names = null;
  let _comment = null;

  function handleNewMessageFormSubmission(event) {
    event.preventDefault();
    props.onNewMessageCreation({names: _names.value,  comment: _comment.value, id: v4()});
   _names.value = '';
   _comment.value = '';
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
    id='comment'
    placeholder='Describe your comment.'
    ref={(textarea) => {_comment = textarea;}}/>
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
