import Onbulb from './on.jpg'
import Offbulb from './off.jpg'
import './App.css';
import React from "react"

export default class App extends React.Component {
 constructor(){
super();
 this.state={bulb:false};
this.on=this.on.bind(this)
this.off=this.off.bind(this)
}
 on(){

  this.setState({bulb:true})
}
 off(){

this.setState({bulb:false})
}

render(){

  return (
    <div className="App">
        <button onClick={this.on}>ON</button>
     <img src={this.state.bulb? Onbulb : Offbulb} alt="bulb"/>
     {console.log(this.state.bulb)}
   
     <button onClick={this.off}>OFF</button>
    </div>
  );
  }}
