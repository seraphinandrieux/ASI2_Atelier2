import React, { Component } from 'react';
import ListCardsFight from './ListCardsFight/ListCardsFight'

class CardsFight extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid">
            <ListCardsFight
                cards={this.props.cards}
                isPlaying={this.props.isPlaying}
            />
            </div>
        )
        
    }
}
export  default CardsFight;