import React, { Component } from "react";
import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather_list";
import SideBar from "react-sidebar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }
  onSetSideBarOpen = open => {
    this.setState({
      sidebarOpen: open
    });
  };
  render() {
    return (
      <div>
        <SearchBar />
        <br />
        <WeatherList />
        <SideBar
          sidebar={
            <div>
              <ul
                style={{
                  width: "200px",
                  textAlign: "center",
                  letterSpacing: "90px",
                  listStyleType: "none",
                  margin: "30%",
                  color: "red",
                  fontWeight: "bolder",
                  fontSize: "2em",
                  fontFamily: "Tahoma"
                }}
              >
                <li>U</li>
                <li>S</li>
                <li>A</li>
              </ul>
              <ul
                style={{
                  width: "200px",
                  textAlign: "center",
                  letterSpacing: "90px",
                  listStyleType: "none",
                  margin: "0%",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "2em",
                  fontFamily: "Tahoma"
                }}
              >
                <li>C</li>
                <li>I</li>
                <li>T</li>
                <li>Y</li>
              </ul>
              <ul
                style={{
                  width: "200px",
                  textAlign: "center",
                  letterSpacing: "90px",
                  listStyleType: "none",
                  margin: "30%",
                  color: "blue",
                  fontWeight: "bolder",
                  fontSize: "2em",
                  fontFamily: "Tahoma"
                }}
              >
                <li>W</li>
                <li>E</li>
                <li>A</li>
                <li>T</li>
                <li>H</li>
                <li>E</li>
                <li>R</li>
              </ul>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSideBarOpen}
          styles={{ sidebar: { backgroundColor: "orange" } }}
        >
          <button onClick={() => this.onSetSideBarOpen(true)}>
            <i
              className="fas fa-angle-double-left"
              style={{ fontSize: "2rem", padding: "12px" }}
            ></i>
          </button>
        </SideBar>
        {/* <Navbar /> */}
      </div>
    );
  }
}
