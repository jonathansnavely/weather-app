import React from 'react';
import moment from 'moment';

const Day = ({ onClick, forecast, dayName }) => {
  const defaultWeatherIcon = '10d';

  if (!forecast || !forecast.length) {
    return null;
  }

  const min = Math.min(...forecast.map(time => time.main.temp_min));
  const max = Math.max(...forecast.map(time => time.main.temp_max));

  return (
    <div className="d-flex flex-column align-items-center" style={{ width: '20%' }}>
      <div>
        {dayName}
      </div>
      <img
        className="border"
        style={{ width: 50, height: 50 }}
        // Should be dynamic
        src={`http://openweathermap.org/img/wn/${defaultWeatherIcon}@2x.png`}
        onClick={onClick}
      />
      <div className="pt-3" style={{ fontSize: '0.5rem'}}>
        {`${min}F / ${max}F`}
      </div>
    </div>
  );
};

const FiveDayForecast = ({ data }) => {
  let daysToRender = {};

  if (data) {
    const weatherTimes = data.list;

    daysToRender = weatherTimes.reduce((agg, item) => {
      const day = moment(item.dt * 1000);
      const dayPosition = day.format('dddd');

      if (agg[dayPosition]) {
        agg[dayPosition].push(item);
      } else {
        agg[dayPosition] = [item];
      }

      return agg;
    }, {});
  }

  return (
    <div className="d-flex justify-content-between">
      {Object.keys(daysToRender).slice(0, 5).map((dayName, i) =>
        <Day key={i} forecast={daysToRender[dayName]} dayName={dayName} onClick={() => alert('todo')} />)}
    </div>
  )
};

export default FiveDayForecast;
