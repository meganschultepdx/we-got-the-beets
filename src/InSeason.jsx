import React from 'react';
import {availableProduce} from './assests/MarketData';
import Month from './Month';

function InSeason(props) {
    var date = new Date();
    var currentMonth = date.toLocaleString('en-us', { month: 'long' })
    var inSeason = availableProduce.find( element => element.month === currentMonth)
    return (
      <div>
          <Month 
          month = {inSeason.month}
          selection = {inSeason.selection} />
      </div>
      );
}

export default InSeason;