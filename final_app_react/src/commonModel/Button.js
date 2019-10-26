import React from 'react';

import { GetCardsList } from '../actions';




import { connect } from 'react-redux';
import User from './User/User';
import {userConnection} from '../actions/index';
import {fightCards1} from '../actions/index';
import {fightCards2} from '../actions/index';
import {cleanCardFightList} from '../actions/index';
import {setPlayer1State} from '../actions/index';
import {setPlayer2State} from '../actions/index';
import { loadCardFight2 } from '../actions/index.js';
import { loadCardFight1 } from '../actions/index.js';
import {setActionPoints1} from '../actions/index';
import {setActionPoints2} from '../actions/index';
import {hasAttacked1} from '../actions/index';
import {hasAttacked2} from '../actions/index';
import {setPlayersInfoAction} from '../actions/index';

import OpenSocket from 'socket.io-client';
import io from 'socket.io-client';
const axios=require('axios') ;

class Button extends React.Component{
    constructor(props){
        super(props);
            
        
	//let roomName="room612";
        
        this.state={
            //room: roomName,
            socket:io.connect('http://localhost:3030')
            
        };
	this.handleOnButton = this.handleOnButton.bind(this);
        this.getCardsList=this.getCardsList.bind(this);
              this.getUserCardList = this.getUserCardList.bind(this);
              this.sendInvite       = this.sendInvite.bind(this);
		this.getUserCardList = this.getUserCardList.bind(this);
        this.bigFight=this.bigFight.bind(this);
        
        this.isEndGameForOponent=this.isEndGameForOponent.bind(this);       
        this.isEndGameForYou=this.isEndGameForYou.bind(this);
        


    }

    sendInvite(){ //send an invitation to fight with another opponent
        if(this.props.params.props.user.isConnected){
        let socketUserConnected     = this.props.params.props.socket;
        let msg                     = this.props.params.props.session.user.login + " wants to fight with you, do you wanna join the fight ?"


        socketUserConnected.emit("INVITATION_BATTLE",this.props.params.props.user,msg,this.props.params.props.session.user)

        alert("We are waiting response");
    }else{
        alert(this.props.params.props.user.username + " is not connected. Please try again later");
    }
    }

tooglePlayer(){
        let self=this;
        let empty_array=[];
        let newPlayer1;
        let newPlayer2;
        let player1=self.props.isCurrentPlayerPlaying;
        let player2=self.props.isPlayerToFightPlaying;

        let u1=self.props.u1;
        let u2=self.props.u2;
        if (player1==true){
            self.props.dispatch(cleanCardFightList(empty_array));
            
            newPlayer1=!player1;
            newPlayer2=!player2;

            self.props.dispatch(setPlayer1State(newPlayer1));
            self.props.dispatch(setPlayer2State(newPlayer2));

            self.props.dispatch(setActionPoints1(self.props.currPlayerActionPt));
            self.updateDataSocket(u1,u2);
        }
        else{
            alert(`Ce n'est pas à vous de jouer`);
        }
        
    }

	updateDataSocket(u1,u2){
        let self=this;
        let playersInfo={
            "player1":{
                "user":u1,
                "isPlaying":self.props.isCurrentPlayerPlaying,
                "cardListToPlay":self.props.currPlayerCardFightList,
                "actionPoints":self.props.currPlayerActionPt                
            },
            "player2":{
                "user":u2,
                "isPlaying":self.props.isPlayerToFightPlaying,
                "cardListToPlay":self.props.playerToFightCardFightList,
                "actionPoints":self.props.playerToFightActionPt                
            }
        }
        self.props.dispatch(setPlayersInfoAction(playersInfo));
        
        const room= self.state.room;
        
        self.props.socket.emit('end_turn',playersInfo);
        self.props.socket.on('maj_info_game',function(data){
            alert('maj des infos');
            //TO DO!!
            self.props.dispatch(setPlayer1State(data.player1.isPlaying));
            self.props.dispatch(setPlayer2State(data.player2.isPlaying));
            self.props.dispatch(setActionPoints1(data.player1.actionPoints));
            self.props.dispatch(setActionPoints2(data.player2.actionPoints));
            self.props.dispatch(loadCardFight1(data.player1.cardListToPlay));
            self.props.dispatch(loadCardFight2(data.player2.cardListToPlay));
        });
        
    }

    bigFight(){
        let that = this;
        let temp_selectedCardFightList = that.props.selectedCardFightList;
        let attackCard=temp_selectedCardFightList[0];
        let targetCard =temp_selectedCardFightList[1];
        let empty_array=[];
        let actionPt1=that.props.currPlayerActionPt;
        if (temp_selectedCardFightList.length==2){
                if(actionPt1!=0){
                    //attaque réussie
                    if (attackCard.attack > targetCard.defence){
                        alert('attaque réussie')
                        that.props.dispatch(fightCards2(targetCard));
                        that.isEndGameForOponent();
                    }
                    //attaque ratée
                    else{
                        //celui qui attaque se fait battre
                        if(targetCard.attack>attackCard.defence){
                            alert(`attaque ratée, ton monstre s'est fait battre`);
                            that.props.dispatch(fightCards1(attackCard));
                            that.isEndGameForYou();
                        }
                        //chacun a une attaque inf à la def de l'autre
                        else{
                            alert("Ton monstre et celui de ton adversaire se sont bien battu mais aucun d'entre eux n'est sorti vainqueur");
                        }

                    }
                    that.props.dispatch(hasAttacked1(that.props.currPlayerActionPt));
                    that.props.dispatch(cleanCardFightList(empty_array));
                }
                else{
                    alert(`vous n'avez plus de points d'action`);
                }
        }
        else{
            alert(`veuillez d'abord choisir les cartes`)
        }
              
        
    }

    isEndGameForYou(){
        let that=this;
        let list1= that.props.currPlayerCardFightList;
        //si c'est la derniere carte     
        if(list1.length-1===0){
            alert(`Vous n'avez plus de cartes. Vous avez perdu...`);
        }
    }

    isEndGameForOponent(){
        let that=this;
        let list2= that.props.playerToFightCardFightList;
        //si c'est la derniere carte
        if(list2.length-1===0){
            alert(`Votre adversaire n' plus de cartes. Vous avez gagné !`);
        }        
    }
      
    getCardsList(){


        let self = this ;
    
        axios.get('http://localhost:8082/cards') 
          .then(function (response) {
                self.props.dispatch(GetCardsList(response.data));
              }  )
            }


   

    getUserCardList(uId){
        let self=this;
        
        let usrTemp;
        
        let url = 'http://127.0.0.1:8082/user/'+uId;
        axios.get(url).then(function(response){
            usrTemp = response.data;
            
            self.props.dispatch(userConnection(usrTemp));
        }).catch(function(err){
            console.log(err);
        })
    }

    handleOnButton(params,uId,cId){
        let that=this;
        let new_order={};
        let actionButton = this.props.actionButton;
        switch (actionButton) {
            case 'BUY_CARD':
              break;
            case 'SELL_CARD':
                    new_order.user_id=uId;
                    
                    new_order.card_id=cId;                
                    axios.post("http://127.0.0.1:8082/sell",new_order)
                    .then((response)=>{
                        if(response.data){
                            that.getUserCardList(uId);
                            
                        }
    
                    })
                    .catch(function(err){
                        console.log(err);
                    });
                
                break;

            case 'GO_STORE':
                        this.getCardsList();

                    params.props.history.push('/market');
                    break;
            
            case 'GO_HOME':
                    params.props.history.push('/home');
                    break;

            case 'INVITE_BATTLE':
                this.sendInvite();
                break;

            case 'GO_WAITINGROOM' :
                    params.props.history.push('/gamingRoom');
                    break;
		
	case 'GO_CHAT':
                params.props.history.push('/chat');
                break;

	    case 'GO_FIGHT':
                params.props.history.push('/fight');
                break;
            case 'START_GAME':
                that.startGame();
                break;
            case 'END_TURN':
               
                that.tooglePlayer();
                break;
            case 'ATTACK':
                that.bigFight();
                break;

            default:

              console.log('Sorry, no action defined');

        }
    }

    render(){
        return(

            <button type="button" onClick = {()=>{this.handleOnButton(this.props.params,this.props.user_id,this.props.idCard)}}>{this.props.message}</button>

        )
    }

   
}

const mapStateToProps = (state,ownProps)=>{
    return{        
        selectedCardFightList: state.cardFightingReducer.cardFightList,
        isCurrentPlayerPlaying: state.currentUserReducer,
        isPlayerToFightPlaying: state.userToFightReducer,
        currPlayerActionPt: state.currentUserReducer.actionPoints,
        playerToFightActionPt: state.userToFightReducer.actionPoints,
        currPlayerCardFightList:state.currentUserReducer.cardListToPlay,
        playerToFightCardFightList:state.userToFightReducer.cardListToPlay,
        playersInfo:state.setPlayersInfoReducer.playersInfo,

        currentUser: state.sessionReducer,
        
        
    }
};

  
export default connect(mapStateToProps) (Button);

