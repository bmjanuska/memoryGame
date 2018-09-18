import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Modal from "./components/Modal";
import arrayShuffle from "array-shuffle";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    winLoss: "",
    isModalOpen: false,
    // ADD CLICK TO TRUE AND THEN ADD TO ARRAY
    clicked: []
  };

  handleClick = id => {
    console.log("button clicked");
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {

    const newScore = this.state.currentScore + 1;
    console.log("Increment counter " + newScore);
    this.setState({
      currentScore: newScore,
    });
    if (newScore === 12) {
      this.setState({ winLoss: "Congrats! Play some more?" });
      this.toggleModal()
      if (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
      }
    } else {
      this.handleShuffle();
    }
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      winLoss: "You lose, try again!",
      clicked: [],
    });
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({ topScore: this.state.currentScore });
    }
    this.toggleModal()
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })

  }

  replayGame = () => {
    this.toggleModal()
  }

  handleShuffle = () => {
    let shuffleFriends = arrayShuffle(friends);;
    this.setState({ friends: shuffleFriends });
  };

  render() {
    console.log(this.state.isModalOpen);
    return (
      <div style={{ position: "relative" }}>
        {this.state.isModalOpen
          ? <Modal
            message={this.state.winLoss}
            replayGame={this.replayGame}
          />
          : null
        }
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          winLoss={this.state.winLoss}
        />
        <Header />
        <Wrapper>
          {this.state.friends.map(friend => (
            //render a component 
            <FriendCard
              key={friend.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        {/* <Footer /> */}
      </div>
    )
  };
}

export default App;
