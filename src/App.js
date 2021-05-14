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
      menuNumber:0,
      prevMenu:0
    }
  }
  
  moveSelected = (direction) =>{
    // to go down we receive -1
    // to go up we receive +1
    var{selectedItem,previousSelectedItem}=this.state;
    previousSelectedItem=selectedItem;
    selectedItem -=direction;
    
    if(selectedItem===0){
      selectedItem=4;
    }else if(selectedItem===5){
      selectedItem=1;
    }
    this.setState({
      selectedItem,
      previousSelectedItem
    });
    // console.log(selectedItem);
  }

  showMenu = ()=>{
    var {menuNumber,prevMenu} = this.state;
    // console.log('showmenu');
    // console.log('menuNubmer',menuNumber);
    if(menuNumber===1){
      menuNumber=0;
      prevMenu = 0;
    }
    else if(menuNumber===6){
      menuNumber=3;
    }else if(menuNumber===3){
      prevMenu=1;
      menuNumber=1;
    }
    else{
      menuNumber =1;
      prevMenu = 0;
    }
    this.setState({menuNumber,prevMenu});
  }
  goInside = () =>{
    var {selectedItem,menuNumber} = this.state;
    // console.log('selected an Item');
    if(menuNumber===1){
      menuNumber += selectedItem;
    }else if(menuNumber===3){
      menuNumber=6;
    }
    this.setState({menuNumber});
  }
  render(){
    var{selectedItem,previousSelectedItem,menuNumber,prevMenu}=this.state;
    
    return(
      <div className="App">
        
        <Screen
          selectedItem={selectedItem}
          previousSelectedItem={previousSelectedItem}
          menuNumber={menuNumber}
          prevMenu={prevMenu}
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
