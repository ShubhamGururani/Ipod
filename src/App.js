import React from 'react';
import './App.css';
import Keypad from './Keypad';
import Screen from './Screen';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      previousSelectedItem:4,
      selectedItem:1 ,
      moveSelected:this.moveSelected,
      showMenu: this.showMenu,
      menuNumber:0
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

  showMenu = ()=>{
    var {menuNumber} = this.state;
    console.log('showmenu');
    console.log('menuNubmer',menuNumber);
    if(menuNumber==0){
      menuNumber=1;
    }else{
      menuNumber-=1;
    }
    this.setState({menuNumber});
  }
  render(){
    var{selectedItem,previousSelectedItem,menuNumber}=this.state;
    
    return(
      <div className="App">
        
        <Screen
          selectedItem={selectedItem}
          previousSelectedItem={previousSelectedItem}
          menuNumber={menuNumber}
        />
        <Keypad 
          moveSelected={this.moveSelected}
          menuNumber={menuNumber}
          showMenu={this.showMenu}
        />
      </div>
    );
  } 
}

export default App;
