import React from 'react';
import PropTypes from "prop-types";
import MessageList from './MessageList'
import { Link } from 'react-router-dom';
import NewMessageForm from './NewMessageForm';

function WeekDay(props){
  return (
    <div>
    <h3>{props.day}s at {props.location}</h3>
    <p><em>Hours: {props.hours}</em></p>
    <p><em>At booth {props.booth}</em></p>
    <button><Link to="/NewMessageForm">Leave Message</Link></button>
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
