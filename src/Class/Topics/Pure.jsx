import React, { Component,PureComponent } from 'react'

export default class Pure extends PureComponent { //Only one time usable
    constructor()
    {
        super();
        this.state={
            data:10
        }
    }
  render() {
    console.log("Render");
    return (
    <div>
        <h1>Pure Component {this.state.data}</h1>
      <button onClick={() => {this.setState({data:10})}}>Click</button>
    </div>
    )
  }
}
