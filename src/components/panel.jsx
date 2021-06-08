import React, { Component } from 'react';
import Display from './display';
import Numbutton from './numbutton';

class panel extends Component {
    constructor(props){
        super(props);
    
        this.state = {value_a:0, value_b:0, result:0};


        this.input = this.input.bind(this);
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
        this.equ = this.equ.bind(this);
      }

      input(){

      }

      add(a,b){
        return a+b;
      }

      sub(a,b){
        return a-b;
      }

      equ(){

      }

    render() {
        return (
            <div>
                <Display value={this.state.result}/>
                <Numbutton value='1'/>
                <Numbutton value='2'/>
                <Numbutton value='3'/>
                <input className="opbtn" type="button" value="+"/>
                <br/>
                <Numbutton value='4'/>
                <Numbutton value='5'/>
                <Numbutton value='6'/>
                <input className="opbtn" type="button" value="-"/>
                <br/>
                <Numbutton value='7'/>
                <Numbutton value='8'/>
                <Numbutton value='9'/>
                <input className="opbtn" type="button" value="="/>
            </div>
        );
    }
}

export default panel;