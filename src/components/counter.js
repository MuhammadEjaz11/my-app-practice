import React, {useState} from 'react';


// function Counter() {
//     const [count, setCount] = useState(5);
//     const [heading, setheading] = useState("Test heading")
//     return (
//         <>
//             <h1>{heading}</h1>

//             <h2> Count:{count} </h2>

//             <button onClick={()=>{setCount(count + 1)}}>Increase</button>
//             <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
//             <button onClick={()=>{setheading("Changes Heading")}}>Change heading</button>
//         </>
//     );
// }

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count:0
      };
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            Click Not me
          </button>
        </div>
      );
    }
  }


