import React, { Component } from 'react';

import {userConnection} from '../../../../actions'
import { connect } from 'react-redux';
import User from '../../../../commonModel/User/User'



const axios = require('axios');


class Buy extends Component {
    constructor(props) {
        super(props);     
        this.click=this.click.bind(this);  
        this.updateUser=this.updateUser.bind(this) ;
    }


    updateUser(id){
      let self = this;

      let usrTemp ;
      //usrTemp = new User();
      axios.get('http://127.0.0.1:8082/user/'+id).then( (response)=>{
               //usrTemp.initialiseUser(response.data);
               usrTemp=response.data;
               self.props.dispatch(userConnection(usrTemp));
             })

      }

    

    click(){
      let self =this;
      axios.post('http://127.0.0.1:8082/buy',{
        user_id : this.props.user.id,
        card_id:this.props.card_id
      })
      .then( (response)=> {
        if (response.data ==true){
          self.updateUser(self.props.user.id)

        }
        else alert("no more money available :(");

        
      })
      .catch(function (error) {
        console.log(error);
      });
}

  
  render() {
    return (

      <button type = "button" onClick={this.click}>Buy </button>                                                   

 
    );
  }
}



export default connect()(Buy);

