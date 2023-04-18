import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import welcome from './Components/welcome';
import counter from './Components/counter';


class App extends Component {
  render(){
  return (
    <div className="App">
      <welcome/>
      <counter/>
    </div>
  );
}
}

export default App;
