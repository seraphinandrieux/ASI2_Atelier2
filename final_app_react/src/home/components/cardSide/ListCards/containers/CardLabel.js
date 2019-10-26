import React, { Component } from 'react';
import Card from '../../../../../commonModel/CardHome/Card'

class CardLabel extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);  

        this.getCard  = this.getCard.bind(this);
        this.state    = {
          
        };
        
    }
  

    
  getCard(id){
    let displayCard ;
    displayCard = '';

    if ((this.props.idToDisplay) == this.props.idCard){

      displayCard= <Card
                      key     = {this.props.key}
                      card    = {this.props.card}
                      idCard  = {this.props.idCard}
                      user_id={this.props.user_id}

                  />;
    }
     return displayCard
  }

  //render function use to update the virtual dom
  render() {

    

    return (
            <div  onClick={()=>{this.props.handleOnCardSelected(this.props.idCard)}}>
                <div className="panel panel-default" > 

                    <div className="panel-heading">
                          <h3 className="panel-title">{this.props.name} </h3>
                    </div>

                    {this.getCard(this.props.idCard)}

                </div>
            </div>
    );
  }
}

export default CardLabel;