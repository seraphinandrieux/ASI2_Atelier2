import React, { Component } from 'react';
import Label from './containers/Label';
import Visual from './containers/Visual';
import { connect } from 'react-redux';

import {setSelectedCardFight} from '../../actions';

class Card extends Component{
    constructor(props){
        super(props);

        this.handleOnCardSelected=this.handleOnCardSelected.bind(this);
    }

    /**
     * la premiere carte est celle du joueur courant (carte qui va attaquer)
     * la deuxieme est celle de l'adversaire (carte qui reçoit l'attaque) 
     */
    handleOnCardSelected(card){
        let self=this;
        let actionPt1 = self.props.actionPoints1;

        if (self.props.isPlaying){
            if(actionPt1!=0){
                if (self.props.selectedCardFightList.length==0){
                    if (card.user == self.props.session.state.userId){
                        alert('votre carte attaquante a été ajoutée');
                        self.props.dispatch(setSelectedCardFight(card));
                        return;
                        
                    }
                    else{
                        alert('veuillez choisir une de vos cartes');
                    }
    
                }
                if (self.props.selectedCardFightList.length==1){
                    if (card.user != self.props.session.state.userId){
                        alert('la carte cible a été ajoutée');
                        self.props.dispatch(setSelectedCardFight(card));
                        return;
                       
                    }
                    else{
                        alert('veuillez choisir une des cartes de l adversaire');
                    }
                }
                if (self.props.selectedCardFightList.length ==2){
                    /*let empty_array=[]
                    self.props.dispatch(cleanCardFightList(empty_array))*/
                    alert('cartes déjà choisies');
                }
            }
            else{
                alert(`vous n'avez plus de points d'action`);
            }
        }   
        else{
            alert(`ce n'est pas à vous de jouer`);
        } 
        console.log(self.props.session.state.userId);
        console.log(self.props.selectedCardFightList);       
    }

    render(){
        return(
            <div className="panel panel-default" onClick={()=>{this.handleOnCardSelected(this.props.card)}}>
                <div className="panel-body">
                    <Label
                        name={this.props.card.name}
                        id={this.props.card.id}
                        user_id = {this.props.user_id}
                        attack={this.props.attack}
                        defence={this.props.defence}
                        isPlaying={this.props.isPlaying}
                    />
                   
                </div>
                <div className="visual">
                <Visual
                        src={this.props.card.imgUrl}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    return{
        cardListToPlay1: state.cardFightReducer1.cardListToPlay,
        selectedCardFightList: state.cardFightingReducer.cardFightList,
        session: state.sessionReducer,
        actionPoints1: state.setActionPointsReducer1.actionPoints1
        
    }
};
export default connect(mapStateToProps)(Card);

