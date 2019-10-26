import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
     return( 
     
     <div>
          <div className="image imageCard">
            
                <div className="blurring dimmable image">
                    <div className="ui inverted dimmer">
                        <div className="content">
                        </div>
                    </div>
                    <div className="ui fluid image">
                        
                        <img id="cardImgId" className="ui centered image" height="10%" width="10%" src={this.props.src} />
                    </div>
                </div>
            </div> 
            
      </div> 
       
   
    )
               
                
       
  }
}

export default Visual;