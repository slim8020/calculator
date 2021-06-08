import logo from './logo.svg';
import Panel from './components/panel';
import Display from './components/display';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {value:0};
  }
  add(a,b){
    return a+b;
  }

  render(){

    let result = 0;

    result = this.add(1,2);
    return (
      <div className="App">
         <h1>Simple Calculator</h1>   
         <Panel/>
      </div>
    );
  }
}

export default App;
