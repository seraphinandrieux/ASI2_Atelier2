import React, { Component } from 'react';
import Visual from "./Visual"
import Buy from "./Buy"
import Button from '../../../../commonModel/Button'

class Panel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);        
    }
    
  //render function use to update the virtual dom
  render() {
    if(this.props.card == undefined){return (<div></div>);}
    return (
            <div className="jumbotron" align= "center">
                <h1 className="display-3">{this.props.card.title}</h1>
                <p className="lead">Detailed information of the card {this.props.card.id} called {this.props.card.name}</p>
                <Visual card={this.props.card}  />
                <hr className="my-4"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-6" >
                  
                        
                                             

                            <Buy 
                                user={this.props.user}
                                 card_id ={this.props.card.id}/>

                        </div>
                        
                    </div>
                </div>
            </div>
    );
  }
}

//export the current classes in order to be used outside
export default Panel;