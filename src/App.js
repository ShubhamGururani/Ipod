import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      previousSelectedItem:0,
      selectedItem:1 ,
      moveSelected:this.moveSelected
    }
  }
  
  moveSelected = (direction) =>{
    // to go down we receive -1
    // to go up we receive +1
    var{selectedItem,previousSelectedItem}=this.state;
    previousSelectedItem=selectedItem;
    selectedItem -=direction;
    
    if(selectedItem==0){
      selectedItem=4;
    }else if(selectedItem==5){
      selectedItem=1;
    }
    this.setState({
      selectedItem,
      previousSelectedItem
    });
    console.log(selectedItem);
  }
  render(){
    var{selectedItem,previousSelectedItem}=this.state;
    
    return(
      <div className="App">
        
        <Screen
          selectedItem={selectedItem}
          previousSelectedItem={previousSelectedItem}
        />
        <Keypad 
          moveSelected={this.moveSelected}
        />
      </div>
    );
  } 
}

export default App;
