import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
     return( 
     
     <div>
          <div class="image imageCard">
            
            <div class="blurring dimmable image">
                <div class="ui inverted dimmer">
                    <div class="content">
                    </div>
                </div>
                <div class="ui fluid image">
                    
                    <img id="cardImgId" class="ui centered image" height="10%" width="10%" src={this.props.src} />
                </div>
            </div>
            </div> </div> 
       
   
    )
               
                
       
  }
}

export default Visual;