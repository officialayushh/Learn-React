import React, { Component } from 'react'
import User from '../User';

export default class Method extends Component {
    constructor(){
        super();
        console.log("Construtor");
        this.state={
            active: null,
            who:null,
            toggle:true
        }
    }
        componentDidMount()
        {
            this.setState({active:"updated"})
            console.log("Mount");
        }
        componentDidUpdate()
        {
            console.log("Update");  //Always type in any scope otherwise it will be go to infinite Loop.
        }
  render() {
      console.log("Render");
    return (
      <div>
        <button onClick={() => {this.setState({active:"Yes"})}}>Submit</button>
        <br/><br/>
        {
            this.state.toggle?<User/>:null
        }
        <button onClick={() => {this.setState({toggle:!this.state.toggle})}}>Delete</button>
      </div>
    )
  }
}
