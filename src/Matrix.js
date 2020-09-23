import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  //Afer the 
  genRow = (vals) => {
    console.log(vals)
    //After genRow() is called through genMatrix, genRow takes a vals argument
    //the vals argument is basically each individual array of pattern1
    // When genRow is invoked, it maps through the array and create a Cell component of each color value
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    // this.props is referencing the pattern1 array as an object: {values: pattern1}
    //the below code is mapping through the 10 different arrays of pattern1 (this.props.values) and
    //creating a div to invoke the genRow function/method 
    
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()} 
        {/** Through index.js, this is being rendered to the DOM. 
          This is then rendered. When this is rendered to the DOM, the genMatrix() method/function is invoked
         */}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}