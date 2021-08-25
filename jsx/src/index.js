import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // to update state must call setState, never do direct assignment
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // must have to define
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>latitude : {this.state.lat}</div>;
    }

    return <div>Loading..</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
