import React, { Component } from 'react';
import Card from '../../../../../commonModel/CardFight/Card';

class CardFightLabel extends Component{
    constructor(props){
        super(props);
        this.getCard=this.getCard.bind(this);
        this.state={};
    }

    getCard(id){
        let displayCard;
        if(this.props.idCard!==undefined){
            displayCard= <Card
                            key     = {this.props.key}
                            card    = {this.props.card}
                            idCard  = {this.props.idCard}
                            user_id={this.props.user_id}
                            attack={this.props.attack}
                            defence={this.props.defence}
                            isPlaying={this.props.isPlaying}

                        />;
        }
        return displayCard;
    }

    render(){
        return(
            <div className="panel panel-default">
                {this.getCard(this.props.idCard)}
            </div>
        )
    }
}

export default CardFightLabel;