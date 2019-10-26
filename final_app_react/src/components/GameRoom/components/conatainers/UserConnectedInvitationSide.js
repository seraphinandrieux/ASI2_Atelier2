import React, { Component } from 'react';
import Button from '../../../../commonModel/Button'

import { connect } from 'react-redux';


class UserConnectedInvitationSide extends Component{
    constructor(props){
        super(props);

        this.state={

        };
    }
  


  render() {

    return (

      <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">{this.props.user.username}</h3>
        </div>
        <div className="panel-body">
          <Button 
            actionButton="INVITE_BATTLE" 
            message="Battle"
            params = {this} // we send this to be redirect 
                            
          />
            
        </div>
      </div>   
    );
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
    user                  : state.gameRoomReducer.user,
    session           : state.sessionReducer.state
  }
};

export default connect(mapStateToProps)(UserConnectedInvitationSide);