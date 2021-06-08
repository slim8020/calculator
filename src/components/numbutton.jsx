import React, { Component } from 'react';

class numbutton extends Component {
    render() {
        return (
                <input className="numbtn" type="button" value={this.props.value}/>
        );
    }
}

export default numbutton;