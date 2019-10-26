
import React, { Component } from 'react';
import ListCards from './ListCards/ListCards'



//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import globalReducer from './reducers';

//const store = createStore(globalReducer);

//extends the object Component
class CardSide extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        
        
        
        //creation of an initial state, a json object
        
    }

   
        
        
    
  //render function use to update the virtual dom
  render() {
    
    return (
      
      <div className="container-fluid">
        <div className="row">
            <h1> My cards</h1>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4" >
                <ListCards 

                    user_id={this.props.user_id}

                    cards ={this.props.cards} //we send the card list 
                />
            </div>
        </div>
      </div>
    );
  }
}

//export the current classes in order to be used outside
export default CardSide;



