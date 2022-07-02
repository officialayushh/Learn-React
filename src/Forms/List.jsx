import React, { Component } from 'react'

export default class List extends Component {
    constructor(){
        super();
        this.state={
            list:[
                {user:"Ayush",Age:19,Class:"Final"},
                {user:"Abhishek",Age:26,Class:"Last"},
                {user:"Shivam",Age:18,Class:"Over"}
            ]
        }
    }
  render() {
    return (
        <>
      <h1>List</h1>
      {
        this.state.list.map((value)=> 
        <div>
            <span>{value.user}</span>
            <span>{value.Age}</span>
            <span>{value.Class}</span>
        </div>
        )
      }
      </>
    )
  }
}
