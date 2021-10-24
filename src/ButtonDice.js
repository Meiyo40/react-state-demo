import React, { Component } from 'react';
import Dice from './Dice';
import './ButtonDice.css';

class ButtonDice extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active : true,
            dices: [1,1,6,6]
        }

        this.launchDice = this.launchDice.bind(this);
        this.setNbDice = this.setNbDice.bind(this);
    }

    launchDice() {
        let newDices = [];
        for(let i = 0; i < this.state.dices.length; i++) {
            newDices.push(Math.floor(Math.random() * 6) + 1);
        }
        this.setState({dices: newDices});
    }

    setNbDice(diff) {
        let newDices = this.state.dices;
        diff < 0 ? newDices.pop() : newDices.push(1);
        this.setState({dices: newDices});
    }

    render () {
        return (
            <div className="ButtonDice">
                <div className="Dices">   
                { 
                    this.state.dices.map( (idx) => { return <Dice diceFace={idx}/> })
                }                     
                </div>
                { this.state.active ? 
                    <div  className="btn-dices-panel">
                        <button onClick={ () => { this.setNbDice(-1) }}>Less Dices</button>
                        <button onClick={ this.launchDice }>{ this.props.text }</button>
                        <button onClick={ () => { this.setNbDice(1) }}>More Dice</button>
                    </div>
                    : 
                    <p>{ this.props.desactiveText }</p> 
                }
            </div>
        );
    }
}

export default ButtonDice;