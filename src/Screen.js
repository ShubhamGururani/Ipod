import React from 'react';

import Homescreen from './components/Homescreen';
import Mainmenu from './components/Mainmenu';
import Coverflow from './components/Coverflow';
import Musicmenu from './components/Musicmenu';
import Games from './components/Games';
import Settings from './components/Settings';
import Musicplayer from './components/Musicplayer';

class Screen extends React.Component{
    componentDidMount(){
        const{menuNumber} =this.props;
        if(menuNumber===0||menuNumber===2||menuNumber===4||menuNumber===5||menuNumber===6) return;
        // console.log(this.props);
        const {selectedItem} = this.props;
        // console.log(`item${selectedItem}`);
        document.getElementById(`item${selectedItem}`).classList.add('active');
    }
    componentDidUpdate(){
        const{menuNumber} =this.props;
        if(menuNumber===0||menuNumber===2||menuNumber===4||menuNumber===5||menuNumber===6) return;
        const {selectedItem,previousSelectedItem} =this.props;
        document.getElementById(`item${selectedItem}`).classList.add('active');
        document.getElementById(`item${previousSelectedItem}`).classList.remove('active');
    }
    
    render(){
        const{menuNumber,prevMenu} =this.props; 
        return(
            <div>
                {menuNumber===0 && <Homescreen/>}
                {menuNumber===1 && <Mainmenu prevMenu={prevMenu}/>}
                {menuNumber===2 && <Coverflow/>}
                {menuNumber===3 && <Musicmenu/>}
                {menuNumber===4 && <Games/>}
                {menuNumber===5 && <Settings/>}
                {menuNumber===6 && <Musicplayer/>}
            </div>
        );
    }
}

export default Screen;