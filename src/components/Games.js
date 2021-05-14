import Notibar from './Notibar';
import React from 'react';
const Games = () =>{
    return(
        <div className="screen-wrapper">
            <div className="screen-internal-wrapper white">
                <Notibar/>
                
                <div><h1>Games</h1></div>
                <img alt="game-icon" src="https://image.flaticon.com/icons/png/128/75/75524.png"/>
            </div>
        </div>
    );
}
export default Games;