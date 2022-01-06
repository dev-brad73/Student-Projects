import React from "react";
import card_sharks from "./images/Card_Sharks_Logo_Anim.gif";

export default function Info() {
  return (
    <div>
      <header className="App-header">
        <img className="home-img" src={card_sharks} alt="main_photo" />
        <h3 className="info-header">Game Rules</h3>
        <ul className="info-ul">
          <li className="info-list">
            The object of the game is to guess whether or not the next card will
            be higher or lower than your current card
          </li>
          <li className="info-list">
            If you think the next card will be higher, click the Higher button.
            If you think the next card will be lower, click the Lower button.
          </li>
          <li className="info-list">
            Cards are a standard playing card deck with values (from lowest to
            highest):<br></br>
            2,3,4,5,6,7,8,9,10,J,Q,K,A Clubs,Spades,Diamonds,Hearts(Suit does
            matter in a tie)
          </li>
          <li className="info-list">
            You start with 0 points. If you choose correctly you get 100 points,
            choose incorrectly and you neither gain nor lose points!!
          </li>
          <li className="info-list">
            If the new card number is the same as the one you have, it will be
            decided by suit. Lowest suit to highest is Clubs, Spades, Diamonds,
            And Hearts.
          </li>
          <li className="info-list">
            The game will save after you finish. View High Scores in High
            Scores.
          </li>
        </ul>
        <form className="home-form" action="/Game">
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
