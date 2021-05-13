import React from 'react';
import ZingTouch from 'zingtouch';

class Keypad extends React.Component{
    
    componentDidMount() {
        // get moveSelected function from appjs via props
        const {moveSelected}=this.props;
        //once the component has been mounted
        var currentAngle = 0;
        var initialAngle = 0;
        // capture the target
        var target = document.getElementById('rotatable');
        // select the region
        var region = new ZingTouch.Region(target);
        // bind the element to rotation event
        region.bind(target,'rotate',function(e){
            var rotatable = document.getElementById('rotatable');
            currentAngle += e.detail.distanceFromLast;
            if(currentAngle-initialAngle>=20){
                // console.log('gone right you go down');
                moveSelected(-1);
                initialAngle = currentAngle;
            }else if(initialAngle-currentAngle>=20){
                // console.log('gone left you go up');
                moveSelected(1);
                initialAngle = currentAngle;
            }
            rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';
        });
    }
    toggleMenu=()=>{
        console.log("callign show menu");
        var{showMenu} =this.props;
        showMenu();
    }
    goIn = () =>{
        console.log('lets go in');
        var {goInside} = this.props;
        goInside();
    }
    
    render(){
        
        return(
            <div className="control-panel-wrapper">
                <div id="rotatable" className="outer-circle-rotatable">
                    
                </div>
                <div className="buttons top-button" onClick={this.toggleMenu}>MENU</div>
                <div className="buttons left-button">
                    <img 
                    src="https://image.flaticon.com/icons/png/128/254/254437.png"
                    alt="Previous"
                    />
                </div>
                <div className="buttons right-button">
                    <img
                    src="https://image.flaticon.com/icons/png/128/254/254428.png"
                    alt="Next"
                    />
                </div>
                <div id="bottom-button" className="buttons">
                    <img
                    src="https://image.flaticon.com/icons/png/128/349/349524.png"
                    alt="Play/Pause"
                    />
                </div>
                <div className="inner-circle ">
                    <span className="buttons" onClick={this.goIn}>Enter</span>
                </div>
                
            </div>
        );
    }
    
}


export default Keypad;