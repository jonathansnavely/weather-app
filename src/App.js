import React, { useEffect, useState } from 'react';
import './App.css';
import FiveDayForcast from './FiveDayForcast';

const App = () => {
  const [zipCode, setZipCode] = useState();
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const zip = 85282;
      const units = 'imperial';
      const appid = '8df9894bcace71d40e078411678d7fe8';

      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=${units}&appid=${appid}`);
      const data = await response.json();
      setApiData(data);
      return data;
    };

    if (zipCode?.length === 5) {
      fetchData();
    }
  }, [zipCode, setZipCode]);

  const handleZipChange = e => {
    const zipCodeInput = e.target.value;

    if (String(zipCodeInput).length <= 5) {
      setZipCode(zipCodeInput);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-between border border-dark mt-3 ml-3" style={{ width: 400, height: 500 }}>
      <div>
        <h4 className="border-bottom border-dark p-3">Weather App</h4>
        <FiveDayForcast data={apiData} />
      </div>
      <div className="d-flex flex-column align-items-center m-3">
        <input className="form-control" type="number" placeholder="Zipcode" onChange={handleZipChange} value={zipCode} />
        <button className="btn btn-outline-secondary mt-3" style={{ width: 200 }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
