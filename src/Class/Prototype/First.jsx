import React, { Component } from 'react'
import Second from './Second'
// To Check using Prototype is valid data-type or not,
export default class First extends Component {
  render() {
    return (
      <div>
        <h1>Type Checking with Prototypes</h1>
      <Second age={20} name="anil sidhu"/>
      </div>
    )
  }
}
