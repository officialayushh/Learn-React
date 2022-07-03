import React, { Component } from 'react'

export default class Control extends Component {
    constructor()
    {
        super();
        this.state = {
            name:"",
            password:"",
        }
    }
    submit() {
        console.log(this.state);
    }
  render() {
    return (
      <div>
        Control
        <input type="text" placeholder='Enter Name' onChange={(e) => this.setState({name:e.target.value})} /> <br/><br/>
        <input type="pasword" placeholder='Enter Passowrd' onChange={(e) => this.setState({password:e.target.value})} /> <br/><br/>
        <button onClick={() => {this.submit()}}>Submit</button>
    </div>
    )
  }
}
