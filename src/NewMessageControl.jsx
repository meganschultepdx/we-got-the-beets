import React from 'react';
import NewMessageForm from './NewMessageForm';
import PropTypes from "prop-types";

class NewMessageControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }



  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewMessageForm onNewMessageCreation={this.props.onNewMessageCreation}/>;
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
