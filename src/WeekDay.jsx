import React from 'react';
import PropTypes from "prop-types";

function WeekDay(props){
  return (
    <div>
      <h3>{props.day}'s at {props.location}</h3>
      <p><em>Hours: {props.hours}</em></p>
      <p><em>At booth {props.booth}</em></p>
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