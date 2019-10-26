import React, { Component } from 'react';
import Card from '../../../../commonModel/CardHome/Card'
import CardLabel from './containers/CardLabel'
import{connect } from 'react-redux';
import setSelectedCard from '../../../../actions/index'

class ListCards extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);    
        
        this.handleOnCardSelected   =   this.handleOnCardSelected.bind(this);

        this.state                  =   {
                                            selected_card_id:0
                                        };

    }
  
   
    handleOnCardSelected(id){ //we update the current cardwhich we want to see

        this.setState({selected_card_id:id});
    }
  
    getAllCardsRender(){ // function to Display all CardLabel

        let array_render=[];
        let idCard;

        if ( this.props.cards!==undefined){
            for(var i=0;i<this.props.cards.length;i++){
            
                idCard = this.props.cards[i].id
    
                array_render.push(     
                    <CardLabel 
                        handleOnCardSelected    = {this.handleOnCardSelected}
                        name                    = {this.props.cards[i].name}
                        key                     = {i}
                        card                    = {this.props.cards[i]}
                        idCard                  = {idCard}
                        user_id                 ={this.props.user_id}
                        idToDisplay             = {this.state.selected_card_id} //allows our CardLabelClass to Display all Info from only the card selected
                    />
                )
                   
            }
        }
        else{
            console.log("card list undefined");
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

}   export default ListCards;
