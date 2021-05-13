import React from 'react';

class Screen extends React.Component{
    componentDidMount(){
        const{menuNumber} =this.props;
        if(menuNumber==0||menuNumber==2||menuNumber==4||menuNumber==5) return;
        // console.log(this.props);
        const {selectedItem} = this.props;
        // console.log(`item${selectedItem}`);
        document.getElementById(`item${selectedItem}`).classList.add('active');
    }
    componentDidUpdate(){
        const{menuNumber} =this.props;
        if(menuNumber==0||menuNumber==2||menuNumber==4||menuNumber==5) return;
        const {selectedItem,previousSelectedItem} =this.props;
        document.getElementById(`item${selectedItem}`).classList.add('active');
        document.getElementById(`item${previousSelectedItem}`).classList.remove('active');
    }
    render(){
        const{menuNumber} =this.props;
        console.log('menuNumber',menuNumber);
        if(menuNumber==0){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                    </div>
                </div>
            );
        }else if(menuNumber==1){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                        
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
        else if(menuNumber==2){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                        
                        <div>Coverflow</div>
                    </div>
                </div>
            );
        }
        else if(menuNumber==3){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                        
                        <div className="side-menu">
                            <h1>iPod.js</h1>
                            <ul>
                                <li id="item1">Artist</li>
                                <li id="item2">Song</li>
                                <li id="item3">Playlist</li>
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
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                        
                        <div>Games</div>
                    </div>
                </div>
            );
        }
        else if(menuNumber==5){
            return(
                <div className="screen-wrapper">
                    <div className="screen-internal-wrapper">
                        <div className="battery">
                            <img 
                                src="https://image.flaticon.com/icons/png/128/3103/3103460.png" 
                                alt="battery"
                            />
                        </div>
                        
                        <div>Settings</div>
                    </div>
                </div>
            );
        }
       
    }
}

export default Screen;