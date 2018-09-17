import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import arrayShuffle from "array-shuffle";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
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
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You lose!",
      clicked: [],
    });
    // HAVE A MODAL POP UP AND THEN RESET
    // CLICK THE MODAL X and THEN IT RESTS
    // BELOW IS A RESET MOVE TO BTN
    // window.location.href = "/";
  };

  handleShuffle = () => {
    let shuffleFriends = arrayShuffle(friends);;
    this.setState({ friends: shuffleFriends });
  };

  render() {
    //Map over the data
    return (
      <div>
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
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
      <Footer />
      </div>
    )
  };
}

export default App;
