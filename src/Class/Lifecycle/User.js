import React, { Component } from 'react'

export default class User extends Component {
    constructor()
    {
        super();
    }
    componentWillUnmount(){
        alert("User Has been Deleted")
    }
  render() {
    return (
      <div>
        <ul>
            <li>Email:Ayush@gmail.com</li>
            <li>Pass: 123456</li>
            <li>Contact: 00000</li>
        </ul>
      </div>
    )
  }
}
