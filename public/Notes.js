// React is javascript library for building user Interfaces.
// It is maintained by facebook and it play with virtual DOM

// This is very fast due to virtual-DOM that's why react is more
// popular to the other Framework and library.

// React has component based architecture for application development.
// We can use NPM and without npm but 90% developer use NPM with it so we learn it with NPM pkg.

// What we learn :-
/* 
1.Basic
2.Components
3.Life Cycle
4.Forms
5.Api Call
6.Auth
7.Redux
8.Project
9.Interviews

What is Component ? use? type ? 
=> Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types,
 Class components and Function components, in this tutorial we will concentrate on Function components.


 What is jSX?
 Jsx in React
 Example wihout jsx
//  Method to make withour jsx is tuff to make,
 => {
   React.createElement(
     'h1',
     {classname: 'head-tag'},
     'Hello JSX'
   )
 }

 What is Props?
 Why use Props?
 Props with Function Component
 Props with class component

 What is State?
 => State will be changed and updated.
 State Example
 Update State on Button click

 Lifecycle Methods?
 Phase nof Life Cycle
     => Mounting
     => Updating
     => Unmouting 
 Example
 Importants of life cycle

 ComponentDidMount => Working as like a constructor then render then mount then render.
 ComponentDidUpdate => Update its state and again and again call render after that,
 ComponentWillUnmount => Delete its state,

 Routing=>
 => What is Routing?
 -> Routing is a process in which a user is directed to different pages based on their action or request. 
 ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application.
 => Make 3 Components?
 => Install Routing Pkg?
 => Import Pkg?
 => Write Code for routing
 => Check Output 


 What is Ref?
 =>Ref is used to work also perform an action but get higher weight
 When to use and when dont use
 Example


 What is Error Boundary?
 Make user Component
 Make ErrorBoundary Component
 Write Code and test it


 ********SSR******** ?
 => (SSR) is a popular technique for rendering a normally client-side app
    on the server and then sending a fully rendered page to the client.

    Benefits:-
    -> One Major Benefit of using SSR is in having an app that can be crawled search engine which help for SEO.
    -> SSR can also often help wit performance because a fully loaded app is sent down from the server on the first request.

    Example:-
    Create New App
    Some change for SSR
    => For placed of render in index.js use hydrate.
    Install some npm package
    => npm install express
    => npm install @babel/register @babel/preset-env @babel/preset-react ignore-styles
    Write some code fro server
    => Make one Folder Server,
    => Inside make two files index.js and server.js

    ***********Server.js=>
    import path from 'path'
    import fs from 'fs'
    import express from 'express'
    import React from 'react'
    import ReactDOMServer from 'react-dom/server'
    import App from '..src/App'
    const PORT = 6000
    const app = express()
    const router = express.Router()
    const serverRenderer = (req,res,next) => {
      fs.readFile(path.resolve('./build/index.html), 'utf-8', (err,data) => {
        if(err) {
          console.log(err)
          return res.status(500).send('An error occured')
        }
        return res.send(
          data.replace(
            '<div id="root"></div>',
            `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`
          )
        )
      })
    }
    router.use('^/$', serverRenderer)

    router.use(
      express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d' })
    )
    app.use(router)

    app.listen(PORT,() => {
      console.log(`SSR running on Port ${PORT}`)
    })

    *************Index.js
    require('ignore-styles')

    require('@babel/register')({
      ignore: [/(node_modules)/],
      presets: ['@babel/preset-env', '@babel/preset-react']
    })
    require('./server')

    Make Build Test Server Side Rendering
    => npm run build
    => node server /index.js


    What is pure component
    why use pure component
    Example // Normal component use pure if state is same this will be used to good to use.
    Test //Pure Component ke case m after upadate render again refresh call nahi hona chahiy,

    What is Memo  //Memo used in Function Components
    Make 2 components
    Apply Memo
    Test It

    Test jwt with postman
    Make Login Form with react
    Call login Api
    Handle jwt token
    Call Other api with jwt Auth

    What is uncontrolled Component ?
    Make a Form
    
    Handle it with uncontrolled way ?
    What is Controlled Component ?

    What is Hook?
    What is custom Hook?
    Make a title counter
    convert it to the custom hook

*/
