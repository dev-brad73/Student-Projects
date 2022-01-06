import React from "react";
import Button from "@material-ui/core/Button";
import card_sharks from "./images/Card_Sharks_Logo_Anim.gif";

export default function High_Scores() {
  const retrieved_scores =
    JSON.parse(localStorage.getItem("saved_scores")) || [];
  retrieved_scores.sort(function (a, b) {
    return b - a;
  });
  const items = retrieved_scores.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <header className="App-header">
        <img className="home-img" src={card_sharks} alt="main_photo" />
        <br></br>
        <br></br>
        <h3 className="info-header">High Scores</h3>
        <ol className="output_list">{items}</ol>
        <div>
          <Button
            id="lower_button"
            onClick={() => {
              localStorage.removeItem("saved_scores");
              refreshPage();
            }}
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
          >
            Reset All Scores
          </Button>
        </div>
      </header>
    </div>
  );
}
