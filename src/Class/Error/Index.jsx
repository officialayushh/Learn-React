import React, { Component } from 'react'
import ErrBound from './ErrBound'
import User from './User'

export default class Index extends Component {
  render() {
    return (
      <div>
        Error Boundary in React
      <ErrBound><User/></ErrBound>
      </div>
    )
  }
}
