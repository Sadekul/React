import React, { Component } from 'react'

class EVENT_BINDING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count : this.state.count + 1
        })
    }

    // OR CS6 use korle bind korar proyojon hobena. CS6 a error dibena
    // handleClick = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }
    
    
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>increase</button>
        {/* OR CS6 use korle bind korar proyojon hobena. CS6 a error dibena */}
        {/* <button onClick={this.handleClick}>increase</button> */}
      </div>
    )
  }
}
export default EVENT_BINDING;
