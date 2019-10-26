import React, { Component } from 'react';
import User from '../commonModel/User/User';
import CardsFight from './components/CardsFight/CardsFight';
import Button from '../commonModel/Button';
import { connect } from 'react-redux';

import {setPlayersInfoAction} from '../actions/index';
import {setActionPoints1} from '../actions/index';
import {setActionPoints2} from '../actions/index';
import {setPlayer1State} from '../actions/index';
import {setPlayer2State} from '../actions/index';
import { loadCardFight2 } from '../actions/index.js';
import { loadCardFight1 } from '../actions/index.js';

//import OpenSocket from 'socket.io-client';
//import io from 'socket.io-client';

import './components/FightRoom.css';





class FightRoom extends Component {
    constructor(props){
        super(props);

     

        let roomName="room612";
        

        
        this.state={
            
            room: roomName,
            //socket:io.connect('http://localhost:3030')
            
        }        
        this.getCurrentPlayer=this.getCurrentPlayer.bind(this);
        
        this.displayGame=this.displayGame.bind(this);       
        this.setPlayersInfo=this.setPlayersInfo.bind(this);
        this.startGame=this.startGame.bind(this);

        this.startGame();

    }

    startGame(){
        
        let currentUser=this.props.currentUser
        let userToFight=this.props.userToFight;
        
        
        this.displayGame();
        this.setPlayersInfo(currentUser,userToFight);
       
        
    }

    setPlayersInfo(u1,u2){
        
        let playersInfo={
            "player1":{
                "user":u1,
                "isPlaying":this.props.isCurrentPlayerPlaying,
                "cardListToPlay":this.props.currPlayerCardFightList,
                "actionPoints":this.props.currPlayerActionPt                
            },
            "player2":{
                "user":u2,
                "isPlaying":this.props.isPlayerToFightPlaying,
                "cardListToPlay":this.props.playerToFightCardFightList,
                "actionPoints":this.props.playerToFightActionPt                
            }
        }
        this.props.dispatch(setPlayersInfoAction(playersInfo));
    }

    displayGame(){
        
        let list1=this.props.currentUser.cardList;
        let list2=this.props.userToFight.cardList;
        let player1First;
        let player2First;
        let actionPt=0;
        const room= this.state.room;
        
        //on tire au hasard le joueur qui commence
        /*let a =parseInt(Math.random()*10)%2;
        if (a==0){
            player1First=true;
            player2First=false;
        }
        else{
            player2First=true;
            player1First=false;
        }*/

       /* self.state.socket.on('connect',function(data){
            alert("connexion au serveur nodeJS");
            self.state.socket.emit("room",room);
        });*/

        this.props.dispatch(loadCardFight1(list1));
        this.props.dispatch(loadCardFight2(list2));

        this.props.dispatch(setPlayer1State(player1First));
        this.props.dispatch(setPlayer2State(player2First));

        this.props.dispatch(setActionPoints1(actionPt));
        this.props.dispatch(setActionPoints2(actionPt));
    }


    

    
    getCurrentPlayer(player1,player2){
        
        let currPlayer;
        currPlayer="nobody is playing";
        console.log('player1:'+player1);

        console.log('player2:'+player2);
        if(player1==true){
            currPlayer=this.props.currentUser.login +" is playing";
        }
        else{
            if(player2==true){
                currPlayer=this.props.userToFight.login+"  is playing";
            }
            
        }
        return currPlayer;
    }

    render(){
        let that=this;

        /*if((this.props.currentUser === undefined)||(this.props.currPlayerCardFightList===undefined)||(this.props.playerToFightCardFightList===undefined)){
            return (<div></div>);
        }*/
        
        return(

            
            
            <div>
                <div className="container-fluid">
                <h1>The Fight Room</h1>
            </div>
                <div className="player1" >
                <User
                            id = {this.props.currentUser.id}
                            surname={this.props.currentUser.surName}
                            lastname={this.props.currentUser.lastName}
                            username={this.props.currentUser.login}
                            money={this.props.currentUser.account}
                            actionPoints={this.props.currPlayerActionPt}

                            /*id={this.state.user1.id}
                            surname={this.state.user1.surName}
                            lastname={this.state.user1.lastName}
                            username={this.state.user1.login}
                            money={this.state.user1.account}
                            actionPoints={this.props.currPlayerActionPt}*/
                            
                        />
                        
                    <div className="player1Cards">
                        <CardsFight
                            cards={this.props.currPlayerCardFightList}
                            isPlaying={this.props.isCurrentPlayerPlaying}
                        />
                    </div>    
                    
                    
                </div>
                <div className="player2" align="right">
                <User
                           id = {this.props.userToFight.id}
                            surname={this.props.userToFight.surName}
                            lastname={this.props.userToFight.lastName}
                            username={this.props.userToFight.login}
                            money={this.props.userToFight.account}
                            actionPoints={this.props.playerToFightActionPt}
                            
                            /*id={this.state.user2.id}
                            surname={this.state.user2.surName}
                            lastname={this.state.user2.lastName}
                            username={this.state.user2.login}
                            money={this.state.user2.account}
                            actionPoints={this.props.playerToFightActionPt}*/
                            
                        />
                        
                        <div className="player2Cards">
                             <CardsFight
                                cards={this.props.playerToFightCardFightList}
                                isPlaying={this.props.isCurrentPlayerPlaying}
                            />
                        </div>
                   
                       
                </div>
                <div className="currPlayer">
                    {this.getCurrentPlayer(this.props.isCurrentPlayerPlaying,this.props.isPlayerToFightPlaying)} 
                </div>
                
                <div className="endTurnButton">
                    <Button
                        actionButton="END_TURN"
                        message='end your turn'
                        u1={this.props.currentUser}
                        u2={this.props.userToFightReducer}
                       
                    />
                </div>
                <div>
                    <Button
                        actionButton='ATTACK'
                        message='attaque'
                        
                    />
                </div>
            </div>
        )
        
    };
}

const mapStateToProps = (state,ownProps)=>{
    return{
        currPlayerCardFightList: state.currentUserReducer.cardListToPlay,
        playerToFightCardFightList: state.userToFightReducer.cardListToPlay,
        isCurrentPlayerPlaying: state.currentUserReducer,
        isPlayerToFightPlaying: state.userToFightReducer,
        currPlayerActionPt: state.currentUserReducer.actionPoints,
        playerToFightActionPt: state.userToFightReducer.actionPoints,
        userToFight : state.userToFightReducer.user,
        currentUser: state.sessionReducer.state.user,
        socket : state.socketReducer
        
    }
};
export default connect(mapStateToProps)(FightRoom);