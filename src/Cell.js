import React, { Component } from 'react';

export default class Cell extends Component {
  /**
   * Babel adds a constructor for us
   constructor(props) {
    super() // called since we are inheriting from the Component class
    //'this' is an instance of Cell
    this.state = {
      color: props.value
    }
  } */
  
  //we can define state like this
  state = {color: this.props.value}

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    //console.log(this.state.color)
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}} 
        onClick={this.handleClick}>
      </div>
    )
  }
  
}