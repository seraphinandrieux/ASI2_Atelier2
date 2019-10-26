import React, { Component } from 'react';
import UserInfo from './components/UserInfo'

class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
                    id : 0,
                    username : "",
                    surname:"",
                    lastname:"",
                    money:"",
                    cardList:[],
		cardListToPlay:[],
                    isConnected:false

        }
        
        this.initialiseUser = this.initialiseUser.bind(this);

    }

    
    initialiseUser(pUser){

        this.setState(
            { 
                id:pUser.id,
                username:pUser.username,
                surname:pUser.surname,
                lastname:pUser.lastname,
                money:pUser.money, 
              cardList:pUser.cardList,
              isConnected:pUser.isConnected
            }
        );
        //this.state.username = pUser.login;
        //this.state.surname  = pUser.surName;
        //this.state.lastname = pUser.lastName;
        //this.state.money    = pUser.account;

    }

    render(){
        return(
            <div className="panel-body">
                <UserInfo
                    id={this.props.id}
                    username={this.props.username}
                    surname={this.props.surname}
                    lastname={this.props.lastname}
                    money={this.props.money}
			
                />
            </div>
        )
    }

   
}

  
  
  export default User;
