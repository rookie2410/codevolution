
import './App.css';
import React,{ Component } from 'react';
import Counter from './Components/Counter';
import Greet from './Components/Greet';




class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Test</h1>
      <Counter/>
      <Greet name='Roshan' hero='Superman'/>
      {/* <Greet name='Rohit' hero='Batman'/>
      <Greet name='Riddhesh' hero='Spiderman'/> */}
    </div>
  );
}
}

export default App;
