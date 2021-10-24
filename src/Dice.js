import React, { Component } from 'react';

class Dice extends Component {
    render () {
        let imgSrc = "/dices/dice_" + this.props.diceFace + ".png";
        return (            
        <div className="Dice">
            <img src={imgSrc} alt="Dice"></img>
        </div>
        );
    }
}

export default Dice;