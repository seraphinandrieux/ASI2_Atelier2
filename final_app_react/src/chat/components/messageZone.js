import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMessage } from '../../actions';
import  '../../sources/css/chat.css';

class MessageZone extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);    
        this.onMessageReceived();
    
    }

onMessageReceived(){
    this.props.socket.on("message",function(message){
        this.props.dispatch(newMessage({message}));

    }.bind(this))
}

    render() {
        if(this.props.messageList=== undefined){
            return (<div></div>);
        }
      return (
        <div className="chatSide">
            {this.props.messageList.map(msg => <div>{msg.message.pseudo.toString()+": "+
           msg.message.message.toString() }</div>)}
        </div>


      );
    }
  }


const mapStateToProps = (state, ownProps) => {
    return { messageList: state.messageReducer.messageList}
  };

  export default connect(mapStateToProps)(MessageZone);
