import React, { Component } from 'react';

import * as jsonSource from '../sources/cards.json';

import { connect } from 'react-redux';
import LeftSide from './components/LeftSide/LeftSide';
import RightSide from './components/RightSide/RightSide';

import User from '../commonModel/User/User.js'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from '../reducers';

import Button from '../commonModel/Button';

const store = createStore(globalReducer);

//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);

   

        
        //creation of an initial state, a json object
        this.state = {

            selected_card_id:0,
        }; 
    }

    
  //render function use to update the virtual dom
  render() {

      if(this.props.cards_list=== undefined){
          return (<div></div>);
      }

    return (
    

      <div className="container-fluid">
        <div className="row">
            <h1> Welcome to card shop</h1>
        </div>
        <div className="row">
        <div>
                   <Button 
                            actionButton="GO_HOME" 
                            message="Go to home"
                            params = {this} // we send this to be redirect 
                    />
                </div>
                  <User
                       id = {this.props.user.id}
                       surname={this.props.user.surName}
                       lastname={this.props.user.lastName}
                       username={this.props.user.login}
                       money={this.props.user.account}
                    />

        <thead>
                        <tr>
                            <th>Cards List</th>
                            <th>Description</th>
                           
                        </tr>
                        <tr>
                            <th>
                                  <div className="col-md-4 col-lg-4"  align="left">
               
                                    <LeftSide 

                                        cards={this.props.cards_list}

                                    />
                                  </div>
                            </th>


                            <th>
                                <div className="col-md-4 col-lg-4"  align="right">
          

                                     <RightSide user={this.props.user} />

                                 </div> 
                            </th>
                        </tr>
        </thead>

        
        </div>
                
      </div>
      

    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {

      session: state.sessionReducer,
      cards_list: state.cardReducer.cardlist,
      user: state.userReducer.user

    }
  };
//export the current classes in order to be used outside
export default connect(mapStateToProps)(Main);