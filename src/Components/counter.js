import React, { Component } from 'react'

class Counter extends Component {


    constructor(props){
        super(props)

        this.state ={
            count:0
        }
    }

    increment(){
        // // this.state.count = this.state.count+1 // this doent let know react to render
        // this.setState({
        //     count:this.state.count+1 // this lets know react to render
        // },
        // ()=>{
        //         console.log('Callback value',this.state.count)
        //     }
        // )
        // console.log(this.state.count) // this way lead to asynchronous where state is updated first then other coponents so we use call back in setstate method , it will be a callback function
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        
        console.log(this.state.count)
    }

  render() {
    return (
        <>
      <div>
        count - {this.state.count}
      </div>
      <button onClick={()=>this.increment()}>Click me to Icrement </button>
      </>
    )
  }
}

export default Counter
