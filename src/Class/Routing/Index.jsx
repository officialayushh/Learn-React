import React, { Component } from 'react'
import {BrowserRouter , Link,Router,Routes,Route} from 'react-router-dom'
import Example from './Example'
import Final from './Final'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Routes>
            <Route exact path="/" element={<Example/>}/>
            <Route exact path="/final" element={<Final/>}/>
        </Routes>
        {/* <Example/>
        <Final/> */}
        <Link to="/">Example</Link>
        <Link to="/final">Final</Link>
      </div>
    )
  }
}
