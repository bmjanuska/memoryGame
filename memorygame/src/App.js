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
    clicked: []
  };
  // Handling click from user on a specific icon/image

  // Add Point for clicking. Increment the Score 

  // Check if the icon/image has been clicked and if clicked 
  // then the user loses. changing clicked to true. 

  // handleClick = id => {
  //   // alert("sanity!");
  //   let shuffleFriends = arrayShuffle(friends); 
  //   this.setState({
  //     clicked: true,
  //     friends: shuffleFriends
  //   });
  // }

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
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 6) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    console.log("Reset");
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You lose!",
      clicked: []
    });
    this.handleShuffle();
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
