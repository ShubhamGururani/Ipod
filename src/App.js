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
    if(menuNumber==1){
      menuNumber=0;
    }
    else{
      menuNumber =1;
    }
    this.setState({menuNumber});
  }
  goInside = () =>{
    var {selectedItem,menuNumber} = this.state;
    console.log('selected an Item');
    switch(selectedItem){
      case 1:
        menuNumber = 2;
        break;
      case 2:
        menuNumber = 3;
        break;
      case 3:
        menuNumber = 4;
        break;
      case 4:
        menuNumber = 5;
        break;
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
          goInside={this.goInside}
        />
      </div>
    );
  } 
}

export default App;
