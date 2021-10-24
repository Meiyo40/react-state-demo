import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Button from './Button';
class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>My App</h1>  
                <Button text="Random Number" desactiveText="YOU WIN !" />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));