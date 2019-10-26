import React, { Component } from 'react';
import CardFightLabel from './containers/CardFightLabel'

class ListCardsFight extends Component{
    constructor(props){
        super(props);

        this.getAllCardsRender=this.getAllCardsRender.bind(this);
    }

    getAllCardsRender(){
        let array_render=[];
        if(this.props.cards!==undefined){
            for(let i=0;i<this.props.cards.length;i++){
                let idCard=this.props.cards[i].id

                array_render.push(
                    <CardFightLabel
                        name                    = {this.props.cards[i].name}
                        key                     = {i}
                        card                    = {this.props.cards[i]}
                        idCard                  = {idCard}
                        user_id                 ={this.props.cards[i].user}
                        attack                  ={this.props.cards[i].attack}
                        defence                 ={this.props.cards[i].defence}
                        isPlaying={this.props.isPlaying}
                    />
                )
            }
        }
        else{
            console.log("card list undefined");
        }
        return array_render;
    }

    render(){
        const cardFightList = this.getAllCardsRender();
        return(
            <div>
                {cardFightList}
            </div>
        )
    }
}
export default ListCardsFight;