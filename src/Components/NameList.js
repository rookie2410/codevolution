import React from 'react'

function NameList() {
  const names = ["Bruce", "Wayne", "Diana"]
  const nameList = names.map((name, index) => <h2 key={index}>{index} of {name}</h2>)

  return <div>{nameList}</div> 
}

export default NameList
