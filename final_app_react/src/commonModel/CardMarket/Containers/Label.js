import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);        
    }
  
  render() {
    return (
                <div>
                    <div class="content">
                                            <div class="ui grid">
                                                <div class="three column row">
                                                    <div class="column">
                                                            <h5>{this.props.name}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                   
                
                </div>
 
    );
  }
}

export default Label;