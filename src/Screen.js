import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Homescreen from './Homescreen';
import Notibar from './Notibar';
import Mainmenu from './Mainmenu';

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
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper white">
                        <Notibar/>
                        
                        <div><h1>Coverflow</h1></div>
                    </div>
                </div>
            );
        }
        else if(menuNumber==3){
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
        else if(menuNumber==4){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper white">
                        <Notibar/>
                        
                        <div><h1>Games</h1></div>
                        <img src="https://image.flaticon.com/icons/png/128/75/75524.png"/>
                    </div>
                </div>
            );
        }
        else if(menuNumber==5){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper white">
                        <Notibar/>
                        
                        <div><h1>Settings</h1></div>
                        <br/>
                        
                        <img id="settings-image-1" src="https://image.flaticon.com/icons/png/128/565/565591.png"/>
                        <img id="settings-image-2"src="https://image.flaticon.com/icons/png/128/3524/3524659.png"/>

                    </div>
                </div>
            );
        }
        else if(menuNumber==6){
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
}

export default Screen;