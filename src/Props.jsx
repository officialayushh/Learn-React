import React from "react";

// const Example = (props) => {
//   return (
//     <>
//       <h1>
//         {props.name} is a Good {props.quality}
//       </h1>
//     </>
//   );
// };

// export default Example;

// Class Component
export default class Example extends React.Component {
  render() {
    return (
      <>
        <h1>
          {this.props.name}is a good{this.props.quality}
        </h1>
      </>
    );
  }
}
