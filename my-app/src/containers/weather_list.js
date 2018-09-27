import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../Components/chart";
import GoogleMap from "../components/googleMap";

export default class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const max_temps = cityData.list.map(weather => weather.main.temp_max);
    const min_temps = cityData.list.map(weather => weather.main.temp_min);
    const { lon. lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={max_temps} color="purple" units="K" /></td>
        <td><Chart data={min_temps} color="green" units="K" /></td>
      </tr>
    );
  }

  render (){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Max Temperature (K)</th>
            <th>Min Temperature (K)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps({weather}){
  return {weather};
}

export default connect(mapDispatchToProps)(WeatherList);
