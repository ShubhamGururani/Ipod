import React from 'react';
import './App.css';
import Keypad from './Keypad';

class App extends React.Component {
  
  render(){
    return(
      <div className="App">
        <Keypad/>
      </div>
    );
  } 
}

export default App;
