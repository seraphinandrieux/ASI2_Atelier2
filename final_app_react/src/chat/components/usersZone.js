import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersZone extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }

    getAllCardsRender(){
      let array_render=[];
      
 
      for(var i=1;i<this.props.usersList.length-1;i++){
 
          
          array_render.push(
            
          this.props.usersList[i]
            
              
              );
      }
      return array_render;
  }
  //render function use to update the virtual dom
  render() {
    const display_list= this.getAllCardsRender();

    if(this.props.usersList=== undefined){
      return (<div></div>);
  }
    return (
      <div>
        <h1>
          Users : 
        </h1>
        <div>
                {display_list}
         </div>
      </div>
            
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    usersList: state.chatReducer,
  }
};

//export the current classes in order to be used outside
export default connect(mapStateToProps)(UsersZone);