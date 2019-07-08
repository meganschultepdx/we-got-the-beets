import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewCommentForm(props){

  let _names = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    props.onNewCommentCreation({names: _names.value,  comment: _comment.value, id: v4()});
   _names.value = '';
   _comment.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewCommentFormSubmission}>
    <input
    type='text'
    id='names'
    placeholder='Pair Names'
    ref={(input) => {_names = input;}}/>
    <textarea
    id='comment'
    placeholder='Describe your comment.'
    ref={(textarea) => {_comment = textarea;}}/>
    <button type='submit'>Help!</button>
    </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
