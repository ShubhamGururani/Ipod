import Notibar from './Notibar';
import React from 'react';

class Mainmenu extends React.Component{
    
    render(){
        const {prevMenu}=this.props;
        if(prevMenu===1){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <Notibar/>
                        
                        <div className="side-menu">
                            <h1>iPod.js</h1>
                            <ul>
                                <li id="item1">Coverflow</li>
                                <li id="item2">Music</li>
                                <li id="item3">Games</li>
                                <li id="item4">Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <Notibar/>
                        
                        <div className="side-menu side-menu-animated">
                            <h1>iPod.js</h1>
                            <ul>
                                <li id="item1">Coverflow</li>
                                <li id="item2">Music</li>
                                <li id="item3">Games</li>
                                <li id="item4">Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}

export default Mainmenu;