import Notibar from './Notibar';
import React from 'react';


const Mainmenu = () =>{
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
}
export default Mainmenu;