import React, { Component } from 'react';
import Matrix from './Matrix.js'

export default class Cell extends Component {
    constructor(props) {
        super() 
        this.state = {
            color: props.value
        }
    }

    render() {
        return <div className="cell" 
        style={{backgroundColor: this.state.color}} 
        onClick={this.handleClick}
        ></div>
    }

    handleClick = (event) => {
        this.setState({
            color: '#333'
        })
    }
}