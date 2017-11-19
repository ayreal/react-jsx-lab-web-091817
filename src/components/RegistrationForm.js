import React from "react";
import ReactDOM from "react-dom";

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit" />
      </form>
    );
  }
}

export default RegistrationForm;

ReactDOM.render(<RegistrationForm />, document.getElementById("global"));
