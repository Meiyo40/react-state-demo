import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Button from './Button';
import ButtonDice from './ButtonDice';
class App extends Component {
    render () {
        return (
            <div className="App">
                <ButtonDice text="Launch Dice" desactiveText="" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));