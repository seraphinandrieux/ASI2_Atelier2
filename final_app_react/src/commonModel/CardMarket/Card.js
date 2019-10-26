import React, { Component } from 'react';
import Label from './Containers/Label';
import Visual from './Containers/Visual';
import { connect } from 'react-redux';


import {setSelectedCard} from '../../actions';

class Card extends Component {

    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.handleOnCardSelected=this.handleOnCardSelected.bind(this);
    }
    
handleOnCardSelected(Card_obj){
    this.props.dispatch(setSelectedCard(Card_obj));   
}
  
 
    
     
  //render function use to update the virtual dom
  render() {

    return (
            <div className="panel panel-default" onClick={()=>{this.handleOnCardSelected(this.props.card)}} align="left">
            
                <div className="panel-heading">
                    <h3 className="panel-title">Card {this.props.card.id} description</h3>
                </div>
                <div className="panel-body">
                
                    <Label
                     
                        name={this.props.card.name} 
                        id={this.props.card.id} 
                    />
                    <Visual 

                        src={this.props.card.imgUrl} 

                    />
                </div>
            </div>
    );
  }
}


export default connect()(Card);

//export default Card;