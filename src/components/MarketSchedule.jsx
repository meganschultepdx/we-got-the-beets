import React from 'react';
import {marketSchedule} from './../assests/MarketData';
import WeekDay from './WeekDay';

function MarketSchedule() {
    return (
        <div>
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