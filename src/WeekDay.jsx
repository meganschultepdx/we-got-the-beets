import React from 'react';
import PropTypes from "prop-types";
import MessageList from './MessageList'
import { Link } from 'react-router-dom';
import NewMessageForm from './NewMessageForm';
import NewMessageControl from './NewMessageControl';

function WeekDay(props){
  return (
    <div>
    <h3>{props.day}s at {props.location}</h3>
    <p><em>Hours: {props.hours}</em></p>
    <p><em>At booth {props.booth}</em></p>
    <NewMessageControl onNewMessageCreation={props.onNewMessageCreation}/>
    <MessageList masterMessageList={props.masterMessageList} />
    <br/><br/>
    <hr/>
    </div>
  );
}

WeekDay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default WeekDay;
