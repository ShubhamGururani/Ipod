import React from 'react';
import Notibar from './Notibar';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
class Musicplayer extends React.Component{
    Player = () => (
        <AudioPlayer
          autoPlay
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
    );
    render(){
        return(
            <div className="screen-wrapper">
                <div className="screen-internal-wrapper white">
                    <Notibar/>
                    <div><h1>Player</h1></div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    {this.Player()}
                    
                    
                </div>
            </div>
        );
    }
}

export default Musicplayer;