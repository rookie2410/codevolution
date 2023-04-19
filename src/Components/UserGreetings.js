import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn :true
      }
    }
    

  render() {

        return this.state.isLoggedIn && <div>Welcome Roshan</div>


        // return(
        //     this.state.isLoggedIn ? <div>Welcome Roshan</div> : <div>Welcome Guest</div>
        // )

        // let message 
        // if(this.state.isLoggedIn)
        //     message=<div>Welcome Roshan from user greeting component</div>
        // else
        //     message=<div>Welcome guest</div>

        // if (this.state.isLoggedIn) {
        //   return <div>Welcome Roshan from user greeting component</div>;
        // } else {
        //   return <div>Welcome guest</div>;
        // }
        // return(message)


    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome Roshan from user greeting component</div>    
    //   </div>
    // )

    
  }
}

export default UserGreetings
