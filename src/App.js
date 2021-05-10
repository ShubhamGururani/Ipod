import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends React.Component {
  
  render(){
    return(
      <div className="App">
        <Screen/>
        <Keypad/>
      </div>
    );
  } 
}

export default App;
