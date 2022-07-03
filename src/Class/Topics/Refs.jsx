// import React, { Component } from 'react'

// export default class Refs extends Component {
//     constructor()
//     {
//         super();
//         this.userRef = React.createRef();
//     }
//     editVal()
//     {
//         this.userRef.current.value= "100000"
//     }
//   render() {
//     return (
//         <>
//       <div>Refs</div>
//       <input type="text" name='user' ref={this.userRef} />
//       <button onClick={() =>this.editVal()}>Click</button>
//       </>
//     )
//   }
// }


// Bootstrap Functionality:-
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default class Refs extends Component {
    constructor()
    {
        super();
        this.state={
            show:false
        }
    }
    handleModal() {
        this.setState({show: !this.state.show})
    }
  render() {
    return (
      <div>
        <Button onClick={()=>this.handleModal()}>Click Me</Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
            <Modal.Header closeButton>Modal Heading</Modal.Header>
            <Modal.Body>
                Hello Everyone
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>this.handleModal()}>Close</Button>
                <Button onClick={()=>this.handleModal()}>Save</Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
