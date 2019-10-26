import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newMessage } from '../../actions';

class InputZone extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);  
        this.textInput = React.createRef(); 
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

 handleSubmit(event) {
  this.props.socket.emit("message",this.state.value);
  this.props.dispatch(newMessage({"message":{"pseudo":this.props.currentSurname, "message":this.state.value}}))
  this.setState({
    value : ''
});
  event.preventDefault();
}

 handleChange(event) {
  this.setState({value: event.target.value});

}
    
  //render function use to update the virtual dom
  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <label>
        Message:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
    );
  }
}

//export the current classes in order to be used outside
export default connect()(InputZone);