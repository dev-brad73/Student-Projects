import React from "react";
import card_sharks from "./images/Card_Sharks_Logo_Anim.gif";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <img className="home-img" src={card_sharks} alt="main_photo" />
        <br></br>
        <br></br>
        <h3 className="home_header" color="ED1C24">
          Higher Or Lower?
        </h3>
        <br></br>
        <form className="home-form" action="/Info">
          <label className="home_label" htmlFor="fname">
            Name:{" "}
          </label>
          <input
            className="text_input"
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter Your Name"
            required
          ></input>
          <br></br>
          <br></br>
          <input
            className="input-submit "
            type="submit"
            value="Start New Game"
          />
          <br></br>
        </form>
      </header>
    </div>
  );
}
