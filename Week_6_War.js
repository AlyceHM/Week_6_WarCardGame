//class for Card, Deck, Player, game
// for Player class create array to store players
// for Deck class create a deck with cards
//for Card class create card numbers and suits, assign values
//track points
//loop with if statements
//if p1.rank > p2.rank, p1 + 1 point
//if p2 .ank > p1.rank, p2 + 1 point
//else p1.rank === p2.rank, no one gets a point

//

class Card {
  constructor(faceValue, suit, rank) {
    this.faceValue = faceValue;
    this.suit = suit;
    this.rank = rank;
  }
}

class Player {
  //giving info for player and hand and score/ definies the properties
  constructor(name, hand) {
    this.name = name;
    this.hand = hand; //isn't being used
    this.playerScore = 0;
  }
}

//class Game {
//constructor() {
// this.deck = deck;
// this.hand1 = hand1;
// this.hand2 = hand2;
// this.player1 = player1;
// this.player2 = player2;
// }
//}

//class Deck { //was originally a class with this. notation
//but deck was undefined below, so changed to variable
//constructor() {
let deck = []; //this is where the 52 cards are stored
let hand1 = []; //this is where the players cards are stored
let hand2 = [];
let player1 = new Player("Player 1", hand1);
let player2 = new Player("Player 2", hand2); //gives actual value to properties

//console.log(player1, player2);
//}
//}
//function for start with set deck , shuffle (fischer yates), deal

//function for  play game, holds hands and scores

//

function createDeck(player1, player2) {
  //could condense create, shuffle and deal into one function?
  let faceValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  let suit = ["♥️", "♦️", "♠️", "♣️"];
  let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  for (let i = 0; i < faceValue.length; i++) {
    for (let s = 0; s < suit.length; s++) {
      deck.push(new Card(faceValue[i], suit[s], rank[i]));
    }
  }
}
let Molly = new Player("Molly");
let Kelly = new Player("Kelly");
createDeck(Molly, Kelly); //call on this function before the shuffle, since people are created before the cards are shuffled
//console.log(deck);
function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i); //random number between 0 and i
    let temp = deck[i]; //assign card at i to temp
    deck[i] = deck[j]; //assign card at j to i
    deck[j] = temp; //assign temp to j
  }
  console.log(deck);
}
shuffle();

function dealDeck(player1, player2) {
  hand1 = deck.slice(0, 26);
  hand2 = deck.slice(26, 52);
  console.log(hand1, hand2);
}

dealDeck();

function playTheGame() {
  for (let i = 0; i < 26; i++) {
    console.log(i);
    if (hand1[i].rank > hand2[i].rank) {
      //this is where an individual card is found
      console.log("Player 1 wins!");
      player1.playerScore++;
      console.log(hand1[i]);
      console.log(hand2[i]);
      console.log(player1.playerScore);
      console.log(player2.playerScore);
    }
    //console.log(hand1[i]);
  }
}
playTheGame();
