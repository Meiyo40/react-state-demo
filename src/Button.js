import React, { Component } from 'react';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active : true,
            number: 0
        }

        this.generateNumber = this.generateNumber.bind(this);
    }

    generateNumber() {
        let rand = Math.floor(Math.random() * 10);
        this.setState({number: rand});
        rand === 7 && this.setState({active:false});
    }

    render () {
        return (
            <div>
                <h1>{ this.state.number.toString() }</h1>
                { this.state.active ? 
                    <button onClick={ this.generateNumber }>{ this.props.text }</button> 
                    : 
                    <p>{ this.props.desactiveText }</p> 
                }
            </div>
        );
    }
}

export default Button;