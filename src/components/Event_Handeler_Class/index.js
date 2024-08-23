import React, { Component } from 'react'

 class Event_Handeler_Class extends Component {

  //on click event
  // handleClick = () =>{
  //   console.log("Clicked")
  // }

  // On change event 
  constructor(props) {
    super(props)
  
    this.state = {
       changedValue : ''
    }
  }
  

  handleOnChange = (e) =>{
  
    this.setState({
      changedValue: e.target.value
    })
    // console.log(e.target.value)
  }


  render() {
    const {changedValue} = this.state;
    return (
      <div>
          {/* on click event */}
       {/* <button onClick={this.handleClick}> Click here</button> */}

      {/* On change event */}
      <input type='text' onChange={this.handleOnChange}/>
      <p>{changedValue}</p>

      </div>
    )
  }
}
export default Event_Handeler_Class;