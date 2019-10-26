import React, { Component } from 'react';

class Visual extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
     return( 
     
   
        
        <div> 


            <div class="ui fluid image">
                                                        

            <img id="cardImgId" class="ui centered image" height="25%" width="25%" src={this.props.card.imgUrl}/>

            </div>

            <table class="table">
            <tr> 
                <td> Family </td>
                <td>{this.props.card.family}</td>
            </tr>
            <tr> 
                <td> Energy </td>
                <td>{this.props.card.energy}</td>
            </tr>
            <tr> 
                <td> Description </td>
                <td>{this.props.card.description}</td>
            </tr>
            <tr> 
                <td> Attack </td>
                <td>{this.props.card.attack}</td>
            </tr>
            <tr> 
                <td> Defense </td>
                <td>{this.props.card.defense}</td>
            </tr>
            <tr> 
                <td> Price </td>
                <td>{this.props.card.price}</td>
            </tr>
            </table>
        </div>
       
   
    )
               
                
       
  }
}

export default Visual;