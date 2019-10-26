import React, { Component } from 'react';
import * as jsonSourceCards from '../sources/cards.json';

import SessionUser from '../commonModel/SessionUser'

import User from '../commonModel/User/User'
import Button from '../commonModel/Button'
import { connect } from 'react-redux';
import {userConnection} from '../actions';

import {openSession} from '../actions'
import CardSide from './components/cardSide/CardSide'

const axios=require('axios') ;




class AppHome extends Component{
    constructor(props){
        super(props);

        let temp_card_list;
        
        temp_card_list=jsonSourceCards.default;
        

        this.state={
            
            
            
            
        };

        this.getUser = this.getUser.bind(this);
        this.getUser(this.props.session.state.user.id);

    }

    getUser(uId){
        let url = 'http://127.0.0.1:8082/user/'+uId;
        let self = this;
        let usrTemp ;
        let sessionTemp;

        //usrTemp = new User();
        axios.get(url).then(function(response){
            console.log(response.data)
            //usrTemp.initialiseUser(response.data);
            usrTemp=response.data;
            self.props.dispatch(userConnection(usrTemp));
            sessionTemp = new SessionUser();
            sessionTemp.updateSession(usrTemp);
            self.props.dispatch(openSession(sessionTemp));
          
        }).catch(function(err){
            console.log(err);

        });
        
            
            
        
        //console.log(usrTemp);
        //return usrTemp;
        }

    render(){

        let usr;

        if(this.props.user === undefined){
            return (<div></div>);
        }

        return(

            <div>
                <div className="container-fluid">{/**<div className="startButton">
                    <Button
                        actionButton="START_GAME"
                        message='start the game'
                        u1={this.state.user1}
                        u2={this.state.user2}
                        list1={this.state.user1.cardList}
                        list2={this.state.user2.cardList}
                    />
                </div> */}
                    <h1>Welcome to your card manager</h1>
                </div>
                <div className="col-md-4 col-lg-4" >

                {console.log(this.props)}
                <User
                        id = {this.props.user.id}
                        surname={this.props.user.surName}
                        lastname={this.props.user.lastName}
                        username={this.props.user.login}
                        money={this.props.user.account}

                    />
                <CardSide
                        cards ={this.props.user.cardList}
                        user_id = {this.props.user.id}

              
                />
                </div>
                <div className="col-md-4 col-lg-4" >
                    
                </div>
                <div>
                   <Button 
                            actionButton="GO_STORE" 
                            message="Go to market"
                            params = {this} // we send this to be redirect 
                    />
                </div>
                <div>
                   <Button 
                            actionButton="GO_WAITINGROOM" 
                            message="Go to waiting room"
                            params = {this} // we send this to be redirect 
                    />
                </div>
                
            </div>

        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
      session: state.sessionReducer,

      user:     state.userReducer.user

    }
  };


export default connect(mapStateToProps)(AppHome);