/*
-> What is React Js,
=> React is a front-end Javascript library developed by facebook in 2011.
Current Version : 18.2.0

-> Difference btw real and virtual DOM.
=> Real DOM :->
1. It updates slow.
2. Can directly update HTML.
3. Creates a new DOM if element updates.
4.DOM manipulation is very expensive.
5. Too much of memory wastage.

Virtual DOM :->
1. It updates Faster.
2. Can't directly update HTML.
3. Updates the JSX if element updates.
4. DOM manipulation is very easy.
5. No memory wastage.

-> What is Jsx?
=> JSX is a shorthand for javascript XML. It allow html code inside javascript code directly.

-> What is Components in react JS ?
=> Components is a simply class or function of js that can be reuse and extend react Class.
They Should be independent to other functions for project.

-> What is State in React ?
=> States are the objects which determine component rendering and behaviour.
We can use them as a variables.When the state is update render function re-render automatically.

-> What is Props in react ?
=> Props are the parameters of the component with help of of props we can share the data betwen
components and they are read-only.

-> Stateful and Stateless Component ?
=> Stateful Component:-
1. Stores info about comonents state change in memory.
2. Have authority to change state.
3. Contains the knowledge of past, current and possible future changes in state.
4. Stateless components notify them about the requirement of the state change,then they send down the props to them.

Stateless Component:-
1. Calculates the internal state of the components.
2. Do not have the authority to change state.
3. Contains no knowledge of past, current and possible future state changes.
4. They receive the props from the stateful components and treat them as callback functions.

-> Can we make PWA app in react?
=> Yes, Event serviceWorker provided with react cli pkg also.

-> Some of the lifecycle mothods ?
1. componentDidMount
2. componentDidUpdate
3. componentWillUnmount
4. shouldComponentUpdate

*/