import React from 'react';
import PropTypes from "prop-types";
import InSeason from './InSeason';

function Month (props){
  return (
    <div>
      <h3>{props.month}</h3>
      <h3>{props.selection}</h3>
    </div>
  );
}

Month.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.arrayOf(PropTypes.string)
  };
  

export default Month ;