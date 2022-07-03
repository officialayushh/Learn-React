import React, { Component } from 'react'

export default class Files extends Component {
    upload(e){
        console.log(e.target.files);
        const files = e.target.files;
        const formData = new FormData();
        formData.append('img', files[0]);
        fetch('https://127.0.0.1:8000/api/store', {
            method:"POST",
            body:formData
        }).then((res) => {
            res.json().then((result) => {
                console.log("result",result);
            })
        })
    }
  render() {
    return (
      <div>
        <h1>Upload FIle in React Js</h1>
        <input type="file" onChange={(e) => this.upload(e)} name='img'/>
      </div>
    )
  }
}
