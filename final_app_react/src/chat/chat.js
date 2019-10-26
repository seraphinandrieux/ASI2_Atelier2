import React, { Component } from 'react';


import { connect } from 'react-redux';

import MessageZone from './components/messageZone'
import InputZone from './components/inputZone'
import UsersZone from './components/usersZone'

import { createStore } from 'redux';
import globalReducer from '../reducers';

import openSocket from 'socket.io-client';
import { getUsersList } from '../actions/index.js';
//import usersZone from './components/usersZone';

const store = createStore(globalReducer);


//extends the object Component
class Chat extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
        this.state = {
             
        }; 

        
    }
  
  //render function use to update the virtual dom
  render() {
    if(this.props.user.login=== undefined){
        return (<div></div>);
    }
    return (
    
      <div className="container-fluid">
        

        <div>
                  <InputZone socket= {this.props.socket}
                    currentSurname= {this.props.user.login}></InputZone>
                    
        </div>

        <div>
                    <MessageZone socket= {this.props.socket} ></MessageZone>                                        
        </div>
        </div>
              
       


    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { 
      user: state.sessionReducer.state.user,
      socket : state.socketChatReducer
    }
  };
//export the current classes in order to be used outside
export default connect(mapStateToProps)(Chat);
