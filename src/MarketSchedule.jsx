import React from 'react';
import {marketSchedule} from './assests/MarketData';
import WeekDay from './WeekDay';

function MarketSchedule() {
    return (
        <div>
          <h1>Where you can find us:</h1>
          <hr/>
          {marketSchedule.map((weekDay, index) =>
            <WeekDay day={weekDay.day}
              location={weekDay.location}
              hours={weekDay.hours}
              booth={weekDay.booth}
              key={index}/>
          )}
        </div>
      );
}


export default MarketSchedule;