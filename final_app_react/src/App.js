import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import AppHome from './home/AppHome';
import AppLogin from './Login/Signin';
import AppStore from './store/store';
import AppGamingRoom from './components/GameRoom/GameRoom';
import AppFight from './FightRoom/FightRoom';
import AppChat from './chat/chat'

import SessionUser from './commonModel/SessionUser';
import {Provider} from 'react-redux';
import User from './commonModel/User/User';
import{ createStore } from'redux';

import  openSocket from 'socket.io-client' ;
import globalReducer from './reducers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const nSession = new SessionUser();
const nUser    = new User()
let socket = openSocket.connect("http://localhost:8089");
let socketChat = openSocket.connect("http://localhost:3333");
  //this.props.dispatch(initSocket(socket));
const initialStore = {
                        sessionReducer : nSession,
                        userReducer    : nUser,
                        cardReducer :{},
                        userToFightReducer :nUser,
                        socketReducer : socket,
                        socketChatReducer : socketChat
   }

const store=createStore(globalReducer,initialStore);
//sessionUser.initSession();

//extends the object Component
class App extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        this.state = {
        }; 
    }

   
    
  //render function use to update the virtual dom
  render() {
    
    return (

          <Provider store={store}>
              <Router>
                <div>
                  
                  <hr />
          
                  <Route exact path ="/"        component={AppLogin}  />
                  <Route  path      ="/home"    component={AppHome}   />
                  <Route  path      ="/market"  component={AppStore}  />
                  <Route  path      ="/gamingRoom"  component={AppGamingRoom}  />
		  <Route  path      ="/fight"   component={AppFight}  />
			 <Route  path      ="/chat"    component={AppChat}  />
                </div>
              </Router>
          </Provider>
        
                  

    );
  }
}

//export the current classes in order to be used outside
export default App;
