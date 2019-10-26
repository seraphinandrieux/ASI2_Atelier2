import React, { Component } from 'react';
import Button from '../../Button'

class InfoCard extends Component {
    constructor(props) {
        super(props);        
    }
  

 


  render() {

    return (

        <div className="ui special cards">
            <div className="card">

                <div className="content">
                    <div className="ui form tiny">
                        <div className="field">
                            <label id="cardNameId"></label>
                            <div id="cardDescriptionId" className="overflowHiden" readOnly="" rows="5"> {this.props.description}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <i className="heart outline icon"></i><span id="cardHPId"> HP {this.props.hp}</span> 
                    <div className="right floated ">
                            <span id="cardEnergyId">Energy {this.props.energy}</span>
                        <i className="lightning icon"></i>
                        
                    </div>
                </div>

                <div className="content">
                    <span className="right floated">
                            <span id="cardAttackId"> Attack {this.props.attack}</span> 
                        <i className=" wizard icon"></i>
                    </span>
                    <i className="protect icon"></i>
                    <span id="cardDefenceId"> defense {this.props.defense}</span> 
                </div>

                <div className="ui bottom attached button">
                    <i className="money icon"></i>
                    Price <span id="cardPriceId"> {this.props.price}$</span>
                </div>

                <Button
                    message = 'Sell'
                    actionButton = "SELL_CARD"
                    idCard      = {this.props.idCard}
                    user_id={this.props.user_id}

                />
            

            </div>
        </div>
 
    );
  }
}

export default InfoCard;