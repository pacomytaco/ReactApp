import React, { Component } from 'react';
import Gorillaz from "./components/gorillaz";
import Header from "./components/header";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar"
import cards from "./gorillaz.json"
import './App.css';


class App extends Component {

  state = {
    cards, 
    clickedCards: [],
    score: 0,
    highscore: 0
  };

  clicked = id => {
    let clickedCards = this.state.clickedCards;
    let score = this.state.score;
    let highscore = this.state.highscore;

    if (clickedCards.indexOf(id) === -1) {
      clickedCards.push(id);

      this.setState({ score: this.state.score +1});
      
      this.state.cards.sort(() => Math.random() - 0.5)
      return;

    } else if (this.state.score === 12) {
      alert("Great job, you won! Click to play again!")
      this.setState({ clickedCards: [], score: 0});
      return;

    }else {
      this.setState({ score: 0, clickedCards: [], status: "Game over! Click to try again!"});
    }
    if (score > highscore) {
      this.setState ({
        highscore: score
      })
    }
    return;
  }

  render() {
    return (
      <div> 
        <Navbar 
         score = {this.state.score}
         highscore = {this.state.highscore}
         />
        <Header />
        <Wrapper>
          {this.state.cards.map(card => (
            <Gorillaz

            key = {card.id}
            id = {card.id}
            name = {card.name}
            image = {card.image}
            clicked = {this.clicked}
            />
          ))}
          </Wrapper>
      </div>
    )
  }
}

export default App;