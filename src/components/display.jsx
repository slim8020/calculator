import React, { Component } from 'react';

class display extends Component {
    render() {
        return (
            <div>
               <input className="disp" type="text" value={this.props.value}/>
            </div>
        );
    }
}

export default display;