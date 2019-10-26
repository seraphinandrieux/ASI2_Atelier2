/*

Specific model for the waiting room


*/

import React, { Component } from 'react';
import '../../sources/css/dot.css'

class UserRoom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            idSocket : 0,
            username : "",
            isConnected:false 

        }
        
        this.initialiseUser     = this.initialiseUser.bind(this);
        this.displayConnected   = this.displayConnected.bind(this);

    }

    
    initialiseUser(pUser){ // allows to init this object with another user model (JSON per example)

        this.setState(
            { 
                idSocket:pUser.idSocket,
                username:pUser.username,
                isConnected:pUser.isConnected
            }
        );

    }

    displayConnected(){

        let strReturn = "dotNotConnected";

        if(this.props.isConnected){

            strReturn = "dotConnected";
        }

        return strReturn;
    }

    

    render(){

        return(
            <div>
                <div  onClick = {()=>{this.props.handleOnUser(this.props.user)}}>
                    <div className="row">
                        <div className="panel panel-default" > 

                            <div className="panel-heading">

                                <h3 className="panel-title">  {this.props.username} </h3><span className={this.displayConnected()}></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

   
}

  
  export default UserRoom;