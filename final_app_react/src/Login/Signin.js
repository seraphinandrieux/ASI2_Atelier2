import React, { Component } from 'react';
import UserInfo from '../commonModel/User/components/UserInfo'
import UserImg from '../sources/img/User.png';
import SigninInfo from './components/SigninInfo'

import {openSession} from '../actions'

import { connect } from 'react-redux';
import User from '../commonModel/User/User';
import SessionUser from '../commonModel/SessionUser';

var axios=require('axios') ;

//import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class Signin extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        //creation of an initial state, a json object
       
        //binding of the function given the ability to use this
        this.processInput = this.processInput.bind(this); 
        this.state = {  
            //session : this.props.session,
            login:"",
            pwd:"",           
        };
    }

    
    processInput(pLogin,pPwd){


        let self = this ;
        let vCurrentSession = new SessionUser() ;
        let vUser ;

        axios.get('http://localhost:8082/authID', {
            params: {
              login: pLogin,
              pwd : pPwd
            }
          })
          .then(function (response) {
              if (response.data !== undefined){
                vUser={
                  username:pLogin,
                  id:response.data
                }
                
                vCurrentSession.updateSession(vUser);
                self.props.dispatch(openSession(vCurrentSession));
                self.props.history.push('/home')
              }else{
                alert("the username or password is incorrect, plese try again or contact it@cpe.fr")
              }
              
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });  

        
    }


  render() {
    // return the react specific virtual dom



    return (
      <div>
      <div>
        {this.props.session.state.login}
      </div>
      <SigninInfo
          processInput  = {this.processInput}
          signinImg     = {UserImg}
      />
      </div>
   );
  }

  
}

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.sessionReducer
  }
};

//export the current classes in order to be used outside
export default connect(mapStateToProps)(Signin);