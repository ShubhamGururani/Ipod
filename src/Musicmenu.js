import React from 'react';
import Notibar from './Notibar';

const Musicmenu = () =>{
    return(
        <div className="screen-wrapper">
            <div className="screen-internal-wrapper">
                <Notibar/>
                
                <div className="side-menu">
                    <h1>iPod.js</h1>
                    <ul>
                        <li id="item1">Artists</li>
                        <li id="item2">Songs</li>
                        <li id="item3">Playlists</li>
                        <li id="item4">Noob</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Musicmenu;