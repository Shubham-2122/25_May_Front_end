// class inbuilt method 
// this.state : define
// this.setstate() : change 
// change update
// same file 
// constort super 
// object 
// Event handler

import React, { Component } from 'react'
import ImageData from './ImageData';

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      name: "hello",
      count: 0,
      isImage: true
    }

    console.log(this.state)
  }
  render() {
    return (
      <div>
        <h1>name : {this.state.name}</h1>
        <button onClick={() => this.setState({ name: "ketan" })}>Change name</button>
        <button onClick={() => this.setState({ name: "mitesh" })}>Change 2</button>

        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.setState({count : this.state.count + 1})}>increment</button>
        <button onClick={()=>this.setState({count : this.state.count - 1})}>Deccrement</button>

        <button onClick={()=>this.setState({count : 0})}>reset</button>

        <hr /> <hr />

        <button onClick={()=>this.setState({isImage : false})}>Hide</button>
        <button onClick={()=>this.setState({isImage : true})}>Show</button>

        <button onClick={()=>this.setState({isImage : !this.state.isImage})}>Toggle</button>


        {
          this.state.isImage ? <ImageData /> : false
        }


      </div>
    )
  }
}

export default ClassState