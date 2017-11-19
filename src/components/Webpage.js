import React from "react";
import ReactDOM from "react-dom";
import FillerText from "./FillerText";

class Webpage extends React.Component {
  render() {
    return (
      <div className="webpage">
        <h1>The world's coolest webpage.</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;

ReactDOM.render(<Webpage />, document.getElementById("global"));
