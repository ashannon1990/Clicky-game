import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Navbar";
import Title from "./components/Jumbotron";
import cards from "./cards.json";
import Cards from "./components/Cards";
import "./index.css";


class App extends Component {


  state = {
    cards,
    score: 0,
    highscore: 0,
    message: "Start",
    clicked: []
  };

  chosenImage = () => {
    const newImages = [];
    while (newImages.length < cards.length) {
      let card = cards[Math.floor(Math.random() * cards.length)];
      if (newImages.indexOf(card) < 0) {
        newImages.push(card)
      }
    }
    return newImages
  }


  imageClicked = name => {
    if (this.state.clicked.indexOf(name) > -1) {
      this.setState({
        clicked: [],
      })

     
      if (this.state.score > this.state.highscore) {
        this.setState({
          highscore: this.state.score
        })
      }

      this.setState({
        score: 0,
      })

      return;

    } else {
      var score = this.state.score;
      score++;
      if (score === 12) {
        alert("YOU WON!")
      }

      if (score > this.state.highscore) {
        this.setState({
          highscore: score
        })
  
      }
      this.setState({
        score: score,
      })
    }

    let clicked = this.state.clicked
    clicked.push(name)
    this.setState({
      clicked
    })
  }

  render() {
    return (
      <div>
        <Nav><span>Score: {this.state.score},   Highscore: {this.state.highscore}</span></Nav>
        <Title>{this.state.message}</Title>
        <Wrapper>
          <div className="row">
            {this.chosenImage().map(card => (
              <Cards
                imageClicked={this.imageClicked}
                name={card.name}
                image={card.image}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}

export default App;