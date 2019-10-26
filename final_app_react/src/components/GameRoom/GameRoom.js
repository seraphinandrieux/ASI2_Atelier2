import React, { Component } from 'react';
import UserRoom from '../../commonModel/User/UserRoom';
import { connect } from 'react-redux';
import { setSelectedUser } from '../../actions';
import {updateUserListConnected} from '../../actions';
import {initUserToFight} from '../../actions'

import { getUsersList } from '../../actions/';
import{initSocket} from '../../actions'
import UserConnectedInvitationSide from './components/conatainers/UserConnectedInvitationSide';
import Chat from '../../chat/chat'
import User from '../../commonModel/User/User';



class GameRoom extends Component{
    constructor(props){
        super(props);

        //-----------------------------------------State----------------------------------------------
        this.state={
            // TODO in the main App , define a const which indicates on which ports to listen
            temp_user_list:[]
            
        };

        //-------------------------------------Bind Functions-------------------------------------------
        this.getAllUserConnected      = this.getAllUserConnected.bind(this);
        this.disconnectClientToSocket = this.disconnectClientToSocket.bind(this);
        this.alertNewUser             = this.alertNewUser.bind(this);
        this.handleOnUser             = this.handleOnUser.bind(this);
        this.initSocketInterface      = this.initSocketInterface.bind(this);
        this.parsingBus               = this.parsingBus.bind(this);
        this.startChat                = this.startChat.bind(this);
        
        //---------------------------Socket function-----------------------------------------------------
        //this.initSocketConnection();
        this.alertNewUser();
        this.initSocketInterface();
        this.startChat(this.props.user.login);

        //-----------------------------------------------------------------------------------------------
        window.addEventListener("beforeunload", this.disconnectClientToSocket); // if we refresh page or close it we prevent server node to delete the websocket

    }

    //---------------------------------------Socket functions declaration-----------------------------------------
  
    startChat(userName){
      console.log("startchat");
      let self=this;

      this.props.socketChat.emit('new_user',userName);
      this.props.socketChat.on('getListUsers',function(list_users){

      
      self.props.dispatch(getUsersList(list_users))
      });

      this.props.socketChat.on('new_user2',function(userName){
      alert( userName + " is connected");
    });
  }
      
    

    disconnectClientToSocket(event){ // function called to remove the socket

      this.props.socket.emit('DISCONNECT',null); // allows the server node to remove the user from the list of user connected
      this.props.socketChat.disconnect();
      this.props.socket.disconnect();
      
    }

    initSocketInterface(){ // we init all listener

      let self = this; // allows in a callback to call GameRoom ReactObject
      let resp = null; // will be the response to send back to the node server

      this.props.socket.on('getNewUser',function(data){ //get back user list connected
        
        self.props.dispatch(updateUserListConnected(data.usersList)) ;
        if(data.newUser.username == self.props.gameRoomReducer.user.username){
          self.props.dispatch(setSelectedUser(data.newUser));
        }
      });

      this.props.socket.on('updateUserList',function(data){ //update user list connected if a socket has been deleted
        
        self.props.dispatch(updateUserListConnected(data.usersList)) ;
        //self.props.dispatch()
      });
        

      this.props.socket.on('GET_INVITATION_RESPONSE',function(resp){ // check if the response of the serveur after send an invitation
      
        if(resp.responseInvit){ // check if the sender responded yes
          
          self.props.dispatch(initUserToFight(resp.user)); // we initialise the opponent
          self.props.history.push('/fight'); // redirect to the fight room

        }else{
            //TO DO : manage case the guy responds NO, however wait the process which blocks user to interact after invit
        }
      });

      //we listen if someone wants to play with us
      this.props.socket.on('SEND_INVITATION_BATTLE',function(data){
      
        if (confirm(data.msg)) { // we respond yes

          resp ={
            responseInvit:true,
            user:self.props.session.state.user, //we send our user object 
            dest:data.sender                    // we keep the dest id to send back results
          }
          self.props.dispatch(initUserToFight(resp.user)) // we init 
          self.props.socket.emit('SEND_INVITATION_RESPONSE',resp);
          self.props.history.push('/fight'); // redirect to the fight room

        }  
      });

    }

    // we send a message to Server to say : a new user is connected please update the userListConnected.
    alertNewUser(){
      this.props.socket.emit('setNewUser', this.props.session.state.user  );
    }

   
//------------------------------------------------Main functions---------------------------------

    handleOnUser(user){ // allows to check on which user connected we have clicked

      this.props.dispatch(setSelectedUser(user))
    }

    getAllUserConnected(){ // returns a list of <UserRoom> object which contains all user connected
      console.log("fct iteration");
      
      let usersListConnectedTemp,usersListTotalTemp;
      let array_render=[]; 

      usersListConnectedTemp  = this.props.usersListConnected;
      usersListTotalTemp      = this.parsingBus(this.props.usersListTotal);
      
      if ( usersListTotalTemp!==undefined){
        for(var i=0;i<usersListTotalTemp.length;i++){
          let isConnected = false;
          let tempUser;
          
          let idSocket=0;
          
          tempUser = usersListTotalTemp[i];

          let user = {id:0,
            isConnected:isConnected,
            username:tempUser};
          for(var j=0;j<usersListConnectedTemp.length;j++){

            let tempUserConnected;
            tempUserConnected = usersListConnectedTemp[j];

            if(tempUserConnected.username.toString() == tempUser.toString()){
              user = tempUserConnected;
              idSocket = tempUserConnected.idSocket;
              isConnected = true
            }
          }
          array_render.push(     
            
            <UserRoom 
                handleOnCardSelected    = {this.handleOnCardSelected}
                user                  = {user}
                idSocket              = {idSocket}
                key                   = {i}
                username              = {tempUser}
                handleOnUser          = {this.handleOnUser}
                isConnected           = {isConnected}
            />
            
          )
        }
      }else{
        console.log("user list undefined");
      }

      return array_render;
    }


    parsingBus(str){
      let newArrayToReturn;
      
      str = str.toString().slice(1, str.length -1);
      newArrayToReturn =str.split(", ");
      return newArrayToReturn;
    }


  render() {

     ;
  
    let lenUsersConnected = this.props.usersListConnected.length;
   
    

   
    return (


      <div className="container-fluid">
        <div className="row">
            <h1> Game Room </h1> <h4>Users connected : {lenUsersConnected}</h4>
        </div>
        <div className="row">
          <div className="col-md-4 col-lg-4" >
                {this.getAllUserConnected()}
          </div>

          <div className="col-md-4 col-lg-4" >
            <UserConnectedInvitationSide
              socket = {this.props.socket}
            />
          </div>  
          <div>
            <Chat></Chat>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {

    gameRoomReducer       : state.gameRoomReducer,
    session               : state.sessionReducer,
    usersListConnected     : state.userConnectedListReducer.users,
    socket                : state.socketReducer,
    socketChat            : state.socketChatReducer,
    usersListTotal        : state.chatReducer,
    user: state.sessionReducer.state.user
    
    

  }
};




export default connect(mapStateToProps)(GameRoom);