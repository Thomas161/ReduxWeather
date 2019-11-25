import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Chart from "../components/spark_lines";
import GoogleMap from "../components/google_map";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import posed from "react-pose";

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const { name, population } = cityData.city;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const icon = "src/image/weatherman.jpg";
    console.log(cityData);
    const { lat, lon } = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={temps} color="yellow" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="red" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%" />
        </td>
        <td>{population}</td>
        <td>
          <img src={icon} style={{ width: "200px", height: "200px" }} />
        </td>
      </tr>
    );
  }
  // componentDidMount() {
  //   setInterval(this.renderWeather(this), 4000);
  // }

  render() {
    const { locale, temperature, humidity, pressure, weather } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{locale}</th>
            <th>{temperature} (K)</th>
            <th>{pressure} (HPA)</th>
            <th>{humidity} (%)</th>
            <th>Population</th>
            <th>""</th>
          </tr>
        </thead>
        {/* <TransitionGroup transitionAppearTimeout={3000} transitionName="alert"> */}
        <tbody>{weather.map(this.renderWeather)}</tbody>
        {/* </TransitionGroup> */}
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  //indentical to weather: state.weather
  return {
    weather
  };
}

WeatherList.propTypes = {
  locale: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  pressure: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired
};
WeatherList.defaultProps = {
  locale: "City",
  temperature: "Temperature",
  pressure: "Pressure",
  humidity: "Humidity"
};
export default connect(mapStateToProps)(WeatherList);
