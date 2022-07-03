import React, { Component } from 'react'

export default class Uncontrol extends Component {
    constructor()
    {
        super();
        this.name = React.createRef();
        this.password = React.createRef();
    }
    submitHandle(e)
    {
        e.preventDefault();
        console.log(this.name.current.value,this.password.current.value);
    }
  render() {
    return (
      <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={(e) => {this.submitHandle(e)}}>
        <input type="text" placeholder='Enter Email' ref={this.name}/> <br/><br/>
        <input type="password" placeholder='Enter Password'ref={this.password} /> <br/><br/>
        <button type='submit'>Submit</button>
        </form>
     </div>

    )
  }
}
