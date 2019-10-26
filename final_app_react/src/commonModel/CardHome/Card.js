import React, { Component } from 'react';
import InfoCard from './containers/InfoCard';
import Visual from './containers/Visual';

class Card extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
  
  //render function use to update the virtual dom
  render() {

    return (
        
                <div className="panel-body">
                    <Visual 
                        type        = "img" 
                        src         = {this.props.card.visual_src} 
                    />
                    <InfoCard 

                        idCard      = {this.props.card.id}
                        user_id={this.props.user_id}

                       description = {this.props.card.description}
                        family      = {this.props.card.family}
                        hp          = {Number(this.props.card.hp)}
                        energy      = {Number(this.props.card.energy)}
                        defense     = {Number(this.props.card.defense)}
                        attack      = {Number(this.props.card.attack)}
                        price       = {Number(this.props.card.price)}
                    />
                </div>
            
    );
  }
}

export default Card;