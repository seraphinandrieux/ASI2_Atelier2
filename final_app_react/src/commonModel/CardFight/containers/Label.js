import React, {Component} from 'react';


class Label extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="content">
                    <div className="ui-grid">
                        <div className="three column row">
                            <div className="column">
                                {/*<h4>User_id:{this.props.user_id}</h4>*/}
                                <h4>Id:{this.props.id}</h4>
                                <h4>{this.props.name}</h4>
                                <h4>Attack:{this.props.attack}</h4>
                                <h4>Defence:{this.props.defence}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Label;