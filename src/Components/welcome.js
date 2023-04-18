import React, { Component } from 'react'

// class Welcome extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Wecome {this.props.name} aka {this.props.hero} </h1>
//       </div>
//     )
//   }
// }

//Destructuring the props in class component => render function
class Welcome extends Component {
    render() {
      const {name,hero} = this.props
      return (
        <div>
          <h1>Wecome {name} aka {hero} </h1>
        </div>
      )
    }
  }

export default Welcome
