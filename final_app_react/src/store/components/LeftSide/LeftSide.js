import React, { Component } from 'react';
import Card from '../../../commonModel/CardMarket/Card';

class LeftSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
        this.getAllCardsRender=this.getAllCardsRender.bind(this);
    }
  
 getAllCardsRender(){
     let array_render=[];
     

     for(var i=0;i<this.props.cards.length;i++){

         
         array_render.push(
             <Card
                key={i}

                card={this.props.cards[i]}

               handleOnCardSelected={this.props.handleOnCardSelected}
             />
             );
     }
     return array_render;
 }
    
  //render function use to update the virtual dom
  render() {
      const display_list= this.getAllCardsRender();
    return (
            <div>
                
               {display_list}
            </div>
    );
  }
}

//export the current classes in order to be used outside
export default LeftSide;