import React from 'react';
import Card from '../Card/Card.js';
import './TenDay.css';

const TenDay = props => {
  return (
    <div className="ten-day-cont">
    {
      props.tenDay.map((day, index) => {
        let tenDayKey = index + day.day;
          return <Card 
                  day = {day.day}
                  condition = {day.condition}
                  conditionIcon = {day.conditionIcon}
                  high = {day.high}
                  low = {day.low}
                  key = {tenDayKey}
                />
      })
    }
    </div>
  )
};

export default TenDay;