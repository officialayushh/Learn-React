import React, { Component, Suspense, lazy } from 'react'
const About = lazy(()=> import('./About'))
const Home = lazy(()=> import('./Home'))

export default class Index extends Component {
  render() {
    return (
      <div>
        Index
        <Suspense fallback={<div>Please wait...home is loading</div>}>
        <Home/>
        </Suspense>
        <Suspense fallback={<div>Please wait...</div>}>
        <About/>
        </Suspense>
      </div>
    )
  }
}
