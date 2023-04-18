import React from 'react'

const Greet = props => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.hero}
      </h1>
    </div>
  )
}

export default Greet
