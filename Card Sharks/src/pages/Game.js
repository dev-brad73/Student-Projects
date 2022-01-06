import React from "react";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import card_sharks from "./images/Card_Sharks_Logo_Anim.gif";

const card_suits = ["clubs", "spades", "diamonds", "hearts"]; // suits of a playing car deck
const card_values = [
  // values on the cards of a playing deck
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  "jack",
  "queen",
  "king",
  "ace",
];
const card_deck = [];

// full deck of cards arranged from lowest value (2 clubs) to highest value (ace hearts)
for (const value of card_values) {
  for (const suit of card_suits) {
    card_deck.push(`${suit}_${value}`);
  }
}

export default function Game() {
  const draw_card = (e) => {
    e.preventDefault();

    setCards((cards) => cards.slice(0, cards.length - 1)); // takes the randomly sorted deck, uses the last card as the current card, and removes the last card and places it in the used_deck

    setUsedCards((usedCards) => [...usedCards, cards[cards.length - 1]]); // used card deck gets updated with the current card thats removed from the cards deck
  };
  const [points, setPoints] = useState(0); // the points accumulated. You start with 100
  const [cards, setCards] = useState(
    [...card_deck].sort(() => Math.random() - 0.5)
  ); // takes a copy of the main deck and randomly sorts it
  const [usedCards, setUsedCards] = useState([]); // cards in the used deck and get updated when cards are used
  const [guess, setGuess] = useState(); // the users guess and gets updated on button press

  // Sorting the array from largest to smallest
  const retrieved_scores =
    JSON.parse(localStorage.getItem("saved_scores")) || [];
  retrieved_scores.sort(function (a, b) {
    return b - a;
  });
  const items = retrieved_scores[0]; // Taking the index 0 (highest score) and outputing it to the game page

  useEffect(() => {
    setCards((cards) => cards.slice(0, cards.length - 1)); // takes the randomly sorted deck, uses the last card as the current card, and removes the last card and places it in the used_deck
    setUsedCards((usedCards) => [...usedCards, cards[cards.length - 1]]); // used card deck gets updated with the current card thats removed from the cards deck
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const indexLastCard = card_deck.indexOf(usedCards[usedCards.length - 2]); // the last card drawn is in the -2 index of the usedCard array and its index in the original card array is found
    const indexDrawnCard = card_deck.indexOf(usedCards[usedCards.length - 1]); // the drawn card is in the -1 index of the usedCard array and its index in the original card array is found
    if (
      // condition if user selects correctly
      (indexLastCard < indexDrawnCard && guess === "higher") || // if the index of the last card is lower than the index of the drawn card and the user selects higher
      (indexLastCard > indexDrawnCard && guess === "lower") // or if the index of the last card is higher than the index of the drawn card and the user selects lower
    ) {
      setPoints((points) => points + 100); // the user gains 100 points if their guess is correct and 0 points if wrong
    }
  }, [usedCards, guess, cards]); // useEffect will get refreshed whenever useCards, guess, cards, or bet is called

  // console.log(card_deck);
  // console.log(cards);
  // console.log(usedCards);

  return (
    <div>
      <header className="App-header">
        <img className="home-img" src={card_sharks} alt="main_photo" />
        <ul className="game_ul">
          <li className="game_list">High Score: {items}</li>
        </ul>
        <br></br>
        <div className="game-button">
          <form onSubmit={draw_card}>
            <Button
              type="submit"
              onClick={() => setGuess("higher")}
              variant="contained"
              color="secondary"
              size="large"
            >
              Higher
            </Button>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              id="lower_button"
              value={guess}
              onClick={() => setGuess("lower")}
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
            >
              Lower
            </Button>
            <p className="game_points">
              Points: {points}
              <br></br>
            </p>
          </form>
        </div>
        <div>
          <p className="last_card">Last Drawn Card</p>
          {usedCards[usedCards.length - 2] && (
            <img
              className="card_pic_last"
              alt="last drawn card"
              src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/${
                usedCards[usedCards.length - 2]
              }.svg`}
            />
          )}
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <p className="current_card">Currently Drawn Card</p>
          {usedCards[usedCards.length - 1] && (
            <img
              className="card_pic_current"
              alt="currently drawn card"
              src={`https://tekeye.uk/playing_cards/images/svg_playing_cards/fronts/${
                usedCards[usedCards.length - 1]
              }.svg`}
            />
          )}
        </div>
        <div>
          <Button
            id="lower_button"
            onClick={() => {
              let newScores = [...retrieved_scores, points];
              newScores.sort(function (a, b) {
                return b - a;
              });
              localStorage.setItem("saved_scores", JSON.stringify(newScores));
              setPoints(0);
              setUsedCards([]);
              setCards([...card_deck].sort(() => Math.random() - 0.5));
              setCards((cards) => cards.slice(0, cards.length - 1));
              setUsedCards((usedCards) => [
                ...usedCards,
                cards[cards.length - 1],
              ]);
            }}
            type="button"
            variant="contained"
            color="secondary"
            size="small"
          >
            Reset/End Game
          </Button>
        </div>
      </header>
    </div>
  );
}
