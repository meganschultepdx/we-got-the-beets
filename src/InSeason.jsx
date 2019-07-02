import React from 'react';
import {availableProduce} from './assests/MarketData';

function InSeason(props) {

    var date = new Date();
    var month = date.toLocaleString('en-us', { month: 'long' })
    return (
      <div>
          <p>{month}</p>
      </div>
      );
}

export default InSeason;