import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function CounterList(props) {
  const counters = props.counters.map(counter => {
    return (
      <App
        key={counter.id}
        counter={counter}
        countUp={props.countUp}
      />
    )
  });
  return (
    <ul>
      {counters}
    </ul>
  )
}

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 'A', count: 0, color: 'tomato' },
        { id: 'B', count: 0, color: 'skyblue' },
        { id: 'C', count: 0, color: 'limegreen' },
        { id: 'D', count: 0, color: 'gray' },
        { id: 'E', count: 0, color: 'pink' },
      ],
      total: 0
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp(counter) {
    this.setState(prevState => {
      const counters = prevState.counters.map(counter => {
        return { id: counter.id, count: counter.count, color: counter.color }
      });

      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;

      return {
        counters: counters,
        total: prevState.total + 1
      };
    });
  }



  render() {
    return (
      <div className="container">
        <ul>
          <CounterList
            counters={this.state.counters}
            countUp={this.countUp}
          />
        </ul>
        <div>
          TOTAL INVENTORY: {this.state.total}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
