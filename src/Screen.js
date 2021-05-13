import React from 'react';

class Screen extends React.Component{
    componentDidMount(){
        const{menuNumber} =this.props;
        if(menuNumber==0) return;
        // console.log(this.props);
        const {selectedItem} = this.props;
        // console.log(`item${selectedItem}`);
        document.getElementById(`item${selectedItem}`).classList.add('active');
    }
    componentDidUpdate(){
        const{menuNumber} =this.props;
        if(menuNumber==0) return;
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
        }else{
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
                                <li id="item1">Songs</li>
                                <li id="item2">Albums</li>
                                <li id="item3">Artists</li>
                                <li id="item4">Playlists</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
       
    }
}

export default Screen;