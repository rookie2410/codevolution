import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }

      this.greetParent = this.greetParent.bind(this) 
    }

    greetParent(childName){ 
        alert( `Hello ${this.state.parentName} from ${childName}`) 
    } 
    
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} /> {/*the greeparent function from parent-component is passed to child-component */}
      </div>
    )
  }
}


// Define the function in parent component , on the child compontn tag pass the method as a props  , in the child compont access the method using pros object , if need to pass a parameter use the arrow index syntax
export default ParentComponent
