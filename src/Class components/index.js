import { Component } from "react";
import "./index.css";

class CounterApp extends Component {
  state = { count: 0 };

  onDecrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
    if (this.state.count <= 0) {
      this.setState((prevState) => ({
        count: (prevState.count = 0),
      }));
      alert("Минимальное число - 0!");
    }
  };

  onZero = () => {
    this.setState((prevstate) => ({ count: (prevstate.count = 0) }));
  };

  onIncrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    if (this.state.count >= 15) {
      this.setState((prevState) => ({
        count: (prevState.count = 15),
      }));
      alert("Максимальное число - 15!");
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Счётчик</h1>
          <h1 className="counter">{count}</h1>
          <div>
            <button className="button" type="button" onClick={this.onDecrement}>
              Уменьшить
            </button>
            <button className="button" type="button" onClick={this.onZero}>
              Обнулить
            </button>
            <button className="button" type="button" onClick={this.onIncrement}>
              Увеличить
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterApp;
