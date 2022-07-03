import React, { Component } from 'react'

export default class User extends Component {
  render() {
    if(true)
    {
        throw new Error('Custom Error');
    }
    return (
      <div>User</div>
    );
  }
}
