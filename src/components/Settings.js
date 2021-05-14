import React from 'react';
import Notibar from './Notibar';
const Settings = () => {
    return(
        <div className="screen-wrapper">
            <div className="screen-internal-wrapper white">
                <Notibar/>
                
                <div><h1>Settings</h1></div>
                <br/>
                
                <img id="settings-image-1" alt='wheel' src="https://image.flaticon.com/icons/png/128/565/565591.png"/>
                <img id="settings-image-2" alt="wheel" src="https://image.flaticon.com/icons/png/128/3524/3524659.png"/>

            </div>
        </div>
    );
}
export default Settings;