import React from "react";
import { render } from "react-dom";
import Hello from "./hello";
import "./style.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

function handleForm(event) {
  event.preventDefault();
  alert(`Hello ${event.target.name.value} ${event.target.surname.value}`); 
  event.target.name.value = ""; 
  event.target.surname.value = "";
  event.target.email.value = "";
  event.target.password.value = "";
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
      <label htmlFor="email">email:</label>
      <input type="email" name="email" required />
      <br />
      <label htmlFor="password">password:</label>
      <input type="password" name="password" required/>
      <br />
      <label htmlFor="done">Done!</label>
      <input name="done" type="submit" />
    </form>
  </div>
);

render(<App />, document.getElementById("root"));
