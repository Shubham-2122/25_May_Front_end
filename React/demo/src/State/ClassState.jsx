// class inbuilt method 
// this.state : define
// this.setstate() : change 
// change update
// same file 
// constort super 
// object 

import React, { Component } from 'react'

class ClassState extends Component {
    constructor(){
        super();
        this.state = {
            name : "hello",
            age:21
        }

        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h1>name : {this.state.name}</h1>
      </div>
    )
  }
}

export default ClassState