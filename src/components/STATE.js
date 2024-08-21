import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class STATE extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}
increment = () =>{
    const {count} = this.state
   this.setState({
    count : count + 1,
   })
}

decrement = () => {
    const {count} = this.state
    this.setState({
        count : count - 1,
    })
}

  render() {
    const {count} = this.state;
    return (
      <div style={{padding : "10px"}}>
      <Button variant="danger" onClick={this.decrement} disabled={count === 0 ? true : false}>-</Button>
        <span style={{padding: "20px"}}>Count: {count}</span>
        <Button variant="danger" onClick={this.increment} disabled={count === 10 ? true : false}>+</Button>
      </div>
    )
  }
}
