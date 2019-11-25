import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    /**  Bind this function to SearchBar component
    (i.e. no arrow function defined, setState not defined error)
    this.onInputChange = this.onInputChange.bind(this);
    */
  }
  onInputChange = e => {
    // console.log(e);
    this.setState({
      term: e.target.value
    });
    // console.log(this.state.term);
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      return;
    } else {
      const { fetchWeather } = this.props;
      const { term } = this.state;
      //fetch weather data
      fetchWeather(term);
      //empty out form
      this.setState({ term: "" });
    }
  };

  render() {
    const { term } = this.state;
    const { forecast } = this.props;

    return (
      <form className="form-inline" onSubmit={this.onFormSubmit}>
        <div className="form-group mb-2">
          <input
            className="form-control"
            type="text"
            onChange={this.onInputChange}
            value={term}
            placeholder={forecast}
            required
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </span>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
/**
 * Order in Connect function
 * First arg == mapStateToProps
 * Second arg == mapDispatchToProps
 */
export default connect(null, mapDispatchToProps)(SearchBar);

SearchBar.propTypes = {
  forecast: PropTypes.string.isRequired
};
SearchBar.defaultProps = {
  forecast: "5 Day Forecast"
};
