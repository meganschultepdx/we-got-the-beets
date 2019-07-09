import React from 'react';
import NewMessageForm from './NewMessageForm';
import PropTypes from "prop-types";

class NewMessageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleFormVisibleOnPage = this.handleFormVisibleOnPage.bind(this);
  }

  handleFormVisibleOnPage(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewMessageForm onNewMessageCreation={this.props.onNewMessageCreation}/>;
    } else {
      currentlyVisibleContent = <button onClick ={this.handleFormVisibleOnPage}>New Message</button>
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewMessageControl.propTypes = {
  onNewMessageCreation: PropTypes.func
};

export default NewMessageControl;
