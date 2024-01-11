import React  from "react";

export default class Count extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  
  increase() {
    let a = document.getElementById("btn");
    setTimeout(() => {
      a.style.transform = "scale(0.8)";
    }, 100);
    a.style.transform = "scale(1)";
    if (this.state.count <= 9) {
      this.setState({ count: this.state.count + 1 });
   
    } else {
      alert("you reach max value");
    }
  }
  decrease() {
    let a = document.getElementById("btn1");
    setTimeout(() => {
      a.style.transform = "scale(0.8)";
    }, 100);
    a.style.transform = "scale(1)";
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <>
        <div className="co">
          <h1 className="count">{this.state.count}</h1>
          <button id="btn" className="inc" onClick={this.increase}>
            +
          </button>
          <button id="btn1" className="des" onClick={this.decrease}>
            -
          </button>
        </div>
      </>
    );
  }

}
