import React from 'react';

const Day = ({ onClick }) => {
  const defaultWeatherIcon = '10d';

  return (
    <div className="d-flex flex-column align-items-center" style={{ width: '20%' }}>
      <div>
        Day
      </div>
      <img
        className="border"
        style={{ width: 50, height: 50 }}
        src={`http://openweathermap.org/img/wn/${defaultWeatherIcon}@2x.png`}
        onClick={onClick}
      />
      <div className="pt-3" style={{ fontSize: '0.5rem'}}>
        {`25F / 45F`}
      </div>
    </div>
  )
};

const FiveDayForecast = () => {
  return (
    <div className="d-flex justify-content-between">
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  )
};

export default FiveDayForecast;
