import React, { Component } from "react";
import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather_list";
import SideBar from "react-sidebar";
import { List } from "./List.js";
import { iStyle } from "./ConstStyle";

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
    const { sidebarOpen } = this.state;
    return (
      <div>
        <SearchBar />
        <br />
        <WeatherList />

        <SideBar
          sidebar={<List />}
          open={sidebarOpen}
          onSetOpen={this.onSetSideBarOpen}
          styles={{
            sidebar: {
              backgroundImage: "url(src/image/usa.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }
          }}
        >
          <button onClick={() => this.onSetSideBarOpen(true)}>
            <i className="fas fa-angle-double-left" style={iStyle}></i>
          </button>
        </SideBar>
      </div>
    );
  }
}
