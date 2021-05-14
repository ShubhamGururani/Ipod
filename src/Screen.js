import React from 'react';

import Homescreen from './Homescreen';
import Notibar from './Notibar';
import Mainmenu from './Mainmenu';
import Coverflow from './Coverflow';
import Musicmenu from './Musicmenu';
import Games from './Games';
import Settings from './Settings';
import Musicplayer from './Musicplayer';

class Screen extends React.Component{
    componentDidMount(){
        const{menuNumber} =this.props;
        if(menuNumber==0||menuNumber==2||menuNumber==4||menuNumber==5||menuNumber==6) return;
        // console.log(this.props);
        const {selectedItem} = this.props;
        // console.log(`item${selectedItem}`);
        document.getElementById(`item${selectedItem}`).classList.add('active');
    }
    componentDidUpdate(){
        const{menuNumber} =this.props;
        if(menuNumber==0||menuNumber==2||menuNumber==4||menuNumber==5||menuNumber==6) return;
        const {selectedItem,previousSelectedItem} =this.props;
        document.getElementById(`item${selectedItem}`).classList.add('active');
        document.getElementById(`item${previousSelectedItem}`).classList.remove('active');
    }
    
    render(){
        
        const{menuNumber} =this.props;
        // console.log('menuNumber',menuNumber);
        if(menuNumber==0){
            return(
                <Homescreen/>
            );
        }else if(menuNumber==1){
            return(
                <Mainmenu/>
            );
        }
        else if(menuNumber==2){
            return(
                <Coverflow/>
            );
        }
        else if(menuNumber==3){
            return(
                <Musicmenu/>
            );
        }
        else if(menuNumber==4){
            return(
                <Games/>
            );
        }
        else if(menuNumber==5){
            return(
                <Settings/>
            );
        }
        else if(menuNumber==6){
            return(
                <Musicplayer/>
            );
        }
       
    }
}

export default Screen;