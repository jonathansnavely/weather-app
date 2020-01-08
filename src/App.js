import React from 'react';
import './App.css';
import FiveDayForcast from './FiveDayForcast';

class App extends React.Component {
  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?zip=94040&units=imperial&appid=8df9894bcace71d40e078411678d7fe8')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {});
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-between border border-dark mt-3 ml-3" style={{ width: 400, height: 500 }}>
        <div>
          <h4 className="border-bottom border-dark p-3">Weather App</h4>
          <FiveDayForcast />
        </div>
        <div className="d-flex flex-column align-items-center m-3">
          <input className="form-control" type="text" placeholder="Zipcode" />
          <button className="btn btn-outline-secondary mt-3" style={{ width: 200 }}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default App;
