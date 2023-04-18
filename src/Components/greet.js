import React from 'react'


//Destructuring in function parameter
// const Greet = ({name , hero}) => {
//     return (
//       <div>
//         <h1>
//           Hello {name} a.k.a {hero}
//         </h1>
//       </div>
//     )
//   }


// Destructuring in function body
const Greet = props => {
    const {name,hero}=props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {hero}
      </h1>
    </div>
  )
}

//Without destructuring 
// const Greet = ({name , hero}) => {
//     return (
//       <div>
//         <h1>
//           Hello {name} a.k.a {hero}
//         </h1>
//       </div>
//     )
//   }

export default Greet
