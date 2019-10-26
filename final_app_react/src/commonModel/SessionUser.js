import React, { Component } from 'react';
import {openSession} from '../actions'

import { connect } from 'react-redux';
//import User from './User'

class SessionUser extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user:{
                id:0,
                username:'null',
            }
        };
        
        this.openSessionUser    =   this.openSessionUser.bind(this);
        this.updateSession      = this.updateSession.bind(this);
       

    }

    updateSession(pUser){
        this.state.user = pUser;
    }

    

    openSessionUser(pLogin,pID){
        this.state.user.username = pLogin;
        this.state.user.id   = pID;
       
    }

}

  
  
  export default SessionUser;
