import React, { Component } from 'react'

export default class Api extends Component {
  constructor()
  {
    super();
    this.state={
      users:null
    }
  }
  componentDidMount()
  {
    fetch('https://reqres.in/api/users').then((res) => {
      res.json().then((result) => {
        // console.log(result);
        this.setState({users:result.data})
      })
    }).catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <>
      <div>Api</div>
      {
        this.state.users ?
        this.state.users.map((value,ind) => 
        <div>{ind}--- {value.first_name} {value.last_name}</div>
        )
        :
        null
      }
      </>
    )
  }
}
