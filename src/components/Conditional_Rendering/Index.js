import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
 class Conditional_Rendering extends Component {


constructor(props) {
  super(props)

  this.state = {
     isLoggedIn : true
  }
}

  render() {
        // if(this.state.isLoggedIn){
        //     return <HomePage/>
        // }
        // else{
        //     return <LoginPage/>
        // }



//OR
const {isLoggedIn} = this.state
return (
    <div>
        {isLoggedIn ? <HomePage /> : <LoginPage /> }

        {/* OR */}

        {/* {isLoggedIn && <HomePage/>} */}
    </div>
    )

  }
}
export default Conditional_Rendering