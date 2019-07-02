import React from 'react';

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

export default WeekDay;