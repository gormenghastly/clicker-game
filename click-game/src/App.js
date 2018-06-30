import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import cards from './cards.json';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    imageCards: cards
  };

  // cards.map(card => {
  //   card.clickedonce = false;
  //   return card;
  // })

  // shuffleCards = cards => {
  //   let newCards = cards;
  //   for (var i = 0; i < newCards.length; i++) {
  //     var rand = Math.floor(Math.random() * (i + 1));
  //     newCards[i] = newCards[rand];
  //     newCards[rand] = cards[i];
  //   }
  //   return newCards;
  // };

  handleImageClick = id => {
    const imageOrder = this.state.imageCards;
    const imageCards = [...this.state.imageCards];
    let clickedCard = imageCards.find(card => card.id === id);
    console.log(clickedCard);
    if (clickedCard.clickedonce) {
      this.endGame();
    } else {
      clickedCard.clickedonce = true;
      this.setState({
        currentScore: this.state.currentScore + 1,
        imageCards: imageOrder.sort(() => Math.random() - 0.5)
      });
    }
  };

  endGame() {
    const resetCards = this.state.imageCards.map(card => {
      card.clickedonce = false;
      return card;
    });
    this.newTopScore();
    this.setState({
      currentScore: 0,
      imageCards: resetCards
    });
  }

  newTopScore() {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({ topScore: this.state.currentScore });
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {cards.map(card => (
            <ImageCard
              key={card.id}
              src={card.image}
              alt={card.name}
              clickedonce={card.clickedonce}
              // onClick={this.handleImageClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default App;
