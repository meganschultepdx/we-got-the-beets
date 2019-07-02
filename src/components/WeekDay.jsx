import React from 'react';

function WeekDay(props){
  return (
    <div>
      <h3>{props.day} - {props.location}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
      <hr/>
    </div>
  );
}

export default WeekDay;