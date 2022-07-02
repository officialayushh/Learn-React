import React, { Component } from 'react'

export default class Form extends Component {
    constructor()
    {
        super();
        this.state={
            // user:null,  //For printing input in states.
            // password:null
            user:"",
            password:"",
            userErr:"",
            passErr:""
        }
    }
    valid(){
        if(!this.state.user.includes("@") && this.state.password.length<5){
            this.setState({userErr:"Invalid User", passErr:"Not Found"})
        }
        else if(this.state.password.length<5){
            this.setState({passErr:"Not Found"})
        }
        else if(!this.state.user.includes("@")){
            this.setState({userErr:"Invalid User"})
        }else{
            return true
        }
    }
    submit() {
        this.setState({userErr:"", passErr:""})
        // console.log(this.state);
        if(this.valid()){
            alert("User has been Submitted")
        }
    }
    render() {
    return (
      <div>
        {/* <input onChange={(e) => {this.setState({user:e.target.value})}} type="text" name="user" placeholder="Enter Your name" />
        <input onChange={(e) => {this.setState({password:e.target.value})}} type="password" name="password" placeholder="Enter Your password" />
        <button onClick={() => this.submit()}>Submit</button> */}
        <br/><br/>
        {/* Form Validation */}
        <input onChange={(e) => {this.setState({user:e.target.value})}} type="text" name='user' placeholder='Enter your name'/>
        <p>{this.state.userErr}</p>
        <input onChange={(e) => {this.setState({password:e.target.value})}} type="password" name='password' placeholder='Enter your password'/>
        <p>{this.state.passErr}</p>
        <button onClick={()=> this.submit()}>Submit</button>
      </div>
    )
  }
}
