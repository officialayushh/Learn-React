// import React from "react";
// import "./styles.css";

// Function Components
// export default function App() {
//   return (
//     <div className="App">
//       <h1>Ayush</h1>
//     </div>
//   );
// }

// Class Components
// Class(Stateful) Components
// Component will start with class.We make condtuctor also.Make Various function ans used that,
// Use Any state in component then we say stateful component.

// When to use them?
// To make big modification we use function.
// To view only way we use class component.
// class App extends React.Component {
//   // Lifecycle Methods are used in Class Component
//   // Hoooks are used in function component.
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     console.warn("Ayush");
//   }
//   render() {
//     return (
//       <div>
//         <h1>Ayush</h1>
//       </div>
//     );
//   }
// }

// export default App;

// Props
// Function
// import React from "react";
// import Example from "./Props";

// const App = () => {
//   return (
//     <div>
//       <h1>Props Example</h1>
//       <Props name="Ayush" quality="Boy" />
//     </div>
//   );
// };

// export default App;

// Class Component
// Show/hide
// import React from "react";

// export default class extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "ayush",
//       email: "ayush@gmail.com",
//       count: 0,
//       show: true
//     };
//   }
//   updateState = () => {
//     this.setState({
//       name: "Broo",
//       count: this.state.count + 1
//     });
//   };

//   handleClick = () => {
//     this.setState({
//       show: !this.state.show
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>States</h1>
//         {this.state.name} is Good.
//         {this.state.email} is my Email.
//         {this.state.count} is Counter Number.
//         <button
//           onClick={() => {
//             this.updateState();
//           }}
//         >
//           Update
//         </button>
//         <br />
//         {this.state.show ? <h1>Show/Hide</h1> : null}
//         <button
//           onClick={() => {
//             this.handleClick();
//           }}
//         >
//           Show/Hide
//         </button>
//       </div>
//     );
//   }
// }




import React from 'react'
import Index from './Class/Loading/Index'
// import Control from './Class/Components/Control'
// import Uncontrol from './Class/Components/Uncontrol'
// import Index from './Class/Error/Index'
// import Refs from './Class/Refs'
// import Pure from './Class/Topics/Pure'
// import Memo from './Function/Hooks/Memo/Memo'
// import List from './Forms/List'
// import Effect from './Hooks/Effect'
// import State from './Hooks/State'
// import Method from './Lifecycle/Method'
// import Form from './Forms/Form'
// import Index from './Routing/Index'
// import {BrowserRouter} from 'react-router-dom'
// import Api from './Class/Api/Api'

function App() {
  return (
    <div>
      {/* <Method/> */}
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Form/> */}
      {/* <List/> */}
      {/* <BrowserRouter>
      <Index/>
      </BrowserRouter> */}
      {/* <Api/> */}
      {/* <Refs/> Bootstrap Functionality Also Provide, */}
      {/* <Index/> */}
      {/* <Pure/> */}
      {/* <Memo/> */}
      {/* <Uncontrol/> */}
      {/* <Control/> */}
      <Index/>
    </div>
  )
}

export default App
