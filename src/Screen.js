import React from 'react';

class Screen extends React.Component{
    componentDidMount(){
        console.log(this.props);
        const {selectedItem} = this.props;
        console.log(`item${selectedItem}`);
        document.getElementById(`item${selectedItem}`).classList.add('active');
    }
    componentDidUpdate(){
        const {selectedItem,previousSelectedItem} =this.props;
        document.getElementById(`item${selectedItem}`).classList.add('active');
        document.getElementById(`item${previousSelectedItem}`).classList.remove('active');
    }
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
                        <li id="item1">Songs</li>
                        <li id="item2">Albums</li>
                        <li id="item3">Artists</li>
                        <li id="item4">Playlists</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Screen;