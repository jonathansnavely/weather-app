import React from 'react';
import './App.css';
import FiveDayForcast from './FiveDayForcast';

// TODO - set this up with sass
// TODO - create github profile

class App extends React.Component {
  componentDidMount() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?zip=94040&units=imperial&appid=8df9894bcace71d40e078411678d7fe8')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        // TODO - potentially erraneous call to setState over here
      });
  }

  render() {
    return (
      <div className="d-flex flex-column border border-dark mt-3 ml-3 p-3" style={{ width: 400, height: 500 }}>
        <div className="container-fluid" style={{ height: 1000 }}>
          <div className="row">
            <div className="col">
              <h3 className="border-bottom border-dark pb-3">Weather App</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <FiveDayForcast />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col d-flex flex-column align-items-center">
              <input className="form-control" type="text" placeholder="Zipcode" />
              <button className="btn btn-outline-secondary mt-3" style={{ width: 200 }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
