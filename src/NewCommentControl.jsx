import React from 'react';
import NewCommentForm from './NewCommentForm';
import PropTypes from "prop-types";

class NewCommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewCommentForm onNewCommentCreation={this.props.onNewCommentCreation}/>;
    } 
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewCommentControl.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentControl;
