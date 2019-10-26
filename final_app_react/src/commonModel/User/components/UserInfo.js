import React, { Component } from 'react';

class UserInfo extends Component{

    constructor(props){
        super(props);
        this.state={
         
            
        }
    }
    render(){
        return(
            <div>
                <div>Id:{this.props.id}</div>
                <div>Surname:{this.props.surname}</div>
                <div>Lastname:{this.props.lastname}</div>
                <div>Username:{this.props.username}</div>
                <div>Money:{this.props.money}</div>
		
            </div>
        );
    }
}

export default UserInfo;
