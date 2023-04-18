import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    //   this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye !!'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message:'GoodBye!!'
        })
    }
    

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click</button> Binding method to bind this keyword ----Performance issue */}
        {/* <button onClick={() => this.clickHandler()}>Event Bind Click</button> using arrow function to bind the this keyword */}
        {/* <button onClick={this.clickHandler}>Event Bind Click</button>    this approach is used mostly used , binding in constructor method --_React documentaion suugest for binding in constructor or arrow function*/}
        <button onClick={this.clickHandler}>Event Bind Click</button>
      </div>
    )
  }
}

export default EventBind
