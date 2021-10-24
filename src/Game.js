import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: true,
            score: 0
        }
    }

    render () {
        return (
            <div className="Game">
                <h1>Your score: { this.state.score }</h1>
                { this.state.isRunning }
            </div>
        );
    }
}

export default Game;