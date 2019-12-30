import React from "react";
import ReactDice from "react-dice-complete";
import "react-dice-complete/dist/react-dice-complete.css";

class RollingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <div className="rolling-box">
        <ReactDice
          numDice={2}
          rollDone={this.rollDoneCallback}
          faceColor="black"
          dotColor="white"
          rollTime="1"
          ref={dice => (this.reactDice = dice)}
        />
        <button className="roll-dices-button" onClick={() => this.rollAll()}>Roll Dices</button>
      </div>
    );
  }

  rollAll() {
    this.reactDice.rollAll();
  }

  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
  }
}

export default RollingBox;
