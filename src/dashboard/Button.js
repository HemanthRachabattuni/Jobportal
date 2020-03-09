import React, { Component } from 'react';

class Button extends Component {
  
  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    return <h1>hello</h1>
  }
  render(){
  return (
    <button onClick={this.sayHello}>
      Click me!
    </button>
  );
}
}
export default Button;