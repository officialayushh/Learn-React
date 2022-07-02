import React, { Component } from 'react'
import {BrowserRouter as Routes,Link,Route} from 'react-router-dom'
import Example from './Example'
import Final from './Final'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Routes>
        <Link to="/">Example</Link>
        <Link to="/sharma">Final</Link>
        <Route exact path="/" element={<Example/>}></Route>
        <Route exact path="/sharma" element={<Final/>}></Route>
        </Routes>
      </div>
    )
  }
}
