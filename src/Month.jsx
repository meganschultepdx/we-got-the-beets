import React from 'react';
import PropTypes from "prop-types";
import InSeason from './InSeason';

function Month (props){
  return (
    <div>
      <h3>{props.month}</h3>
      {props.selection.map((produce) => 
          <h5>{produce}</h5>
      )}
    </div>
  );
}

Month.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.arrayOf(PropTypes.string)
  };
  

export default Month ;