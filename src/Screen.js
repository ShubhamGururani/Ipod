import React from 'react';

class Screen extends React.Component{
    render(){
        return(
            <div className="screen-wrapper">
                <div className="battery">
                    <img 
                        src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                        alt="battery"
                    />
                </div>
                <div className="side-menu">
                    <h1>iPod.js</h1>
                    <ul>
                        <li>Songs</li>
                        <li className="active">Albums</li>
                        <li>Artists</li>
                        <li>Playlists</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Screen;