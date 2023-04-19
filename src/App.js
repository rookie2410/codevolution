
import './App.css';
import React,{ Component } from 'react';
import Counter from './Components/Counter'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreetings from './Components/UserGreetings';
import NameList from './Components/NameList';




class App extends Component {
  render(){
  return (
    <div className="App">
      <h1>Test</h1>
      <Counter/>
      <Greet name='Roshan' hero='Superman'/>
      {/* <Greet name='Rohit' hero='Batman'/>
      <Greet name='Riddhesh' hero='Spiderman'/> */}
      <Welcome name='Rohit' hero='Batman' />   
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreetings />
      <NameList />
    </div>
  );
}
}

export default App;
