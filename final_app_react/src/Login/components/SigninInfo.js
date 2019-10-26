import React, { Component } from 'react';


//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class SigninInfo extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
        this.state = {  
            login:"",
            pwd:"",           
        };
        //binding of the function given the ability to use this
       
    }
    
    

  render() {
    // return the react specific virtual dom
    return (
      <form className="App">
      <h1 className="ui dividing header"><center>Log in</center></h1>
      <center><img src={this.props.signinImg} /></center>
        <div className="field">
          <center>
            <label>Username </label>
            <input type="text" id="login" placeholder="Username"></input>
          </center>
          </div>
          <div className="field">
            <center>
              <label>Password </label>
              <input type="password" id="pwd" placeholder="*******"></input>
            </center>
          </div>
         <center><button type="button" onClick={()=>{this.props.processInput(document.getElementById("login").value,document.getElementById("pwd").value)}} >Let's go!</button></center>
    </form>   
   );
  }
}
//export the current classes in order to be used outside
export default SigninInfo;