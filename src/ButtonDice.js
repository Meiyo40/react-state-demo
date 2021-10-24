import React, { Component } from 'react';
import Dice from './Dice';
import './ButtonDice.css';

class ButtonDice extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active : true,
            dices: [1,1]
        }

        this.launchDice = this.launchDice.bind(this);
    }

    launchDice() {
        let dice1 = Math.floor(Math.random() * 6) + 1;        
        let dice2 = Math.floor(Math.random() * 6) + 1;

        this.setState({dices: [dice1, dice2]});
    }

    render () {
        return (
            <div className="ButtonDice">
                <div className="Dices">                        
                    <Dice diceFace={this.state.dices[0]}/>
                    <Dice diceFace={this.state.dices[1]}/>
                </div>
                { this.state.active ? 
                    <button className="btn-dice-launch" onClick={ this.launchDice }>{ this.props.text }</button> 
                    : 
                    <p>{ this.props.desactiveText }</p> 
                }
            </div>
        );
    }
}

export default ButtonDice;