import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function handleForm(event) {
  event.preventDefault(); // stops form from "refreshing" automatically - it follows action, hence the refresh
  alert(`Hello ${event.target.name.value} ${event.target.surname.value}`); // show a simple dialog box with the values
  event.target.name.value = ""; // flushes the name value
  event.target.surname.value = ""; // flushes the surname value
}

const App = () => (
  <div style={styles}>
    <Hello name="Form!" />
    <form id="someForm" onSubmit={handleForm}>
      {/* the `onSubmit` event-listener of the form, calls the function*/}
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" required />
      <br />
      <label htmlFor="surname">Surname:</label>
      <input type="text" name="surname" required />
      <br />
      <label htmlFor="done">Done!</label>
      <input name="done" type="submit" />
    </form>
  </div>
);

render(<App />, document.getElementById("root"));
