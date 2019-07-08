import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class NewComment extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/NewComment' />
    }
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>New Comment</button>
       </div>
    )
  }
}

export default NewComment;
