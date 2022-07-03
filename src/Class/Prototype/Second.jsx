import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Second extends Component {
  render() {
    return (
        <>
      <div>Second {this.props.age}</div>
      <div>Second {this.props.name}</div>
      </>
    )
  }
}

Second.propTypes = {
    age:PropTypes.number,
    name:PropTypes.string
}
