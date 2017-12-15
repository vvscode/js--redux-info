import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Form from './components/Form';
import Filter from './components/Filter';
import Table from './components/Table';
import { getItems } from './apiWrapper';

class App extends Component {
  state = {
    items: []
  }
  constructor() {
    super();
    getItems().then((items) => {
      console.log(items);
      this.setState({
        items
      });
    });
  }

  addTask = ({title}) => {
    this.setState({
      items: [{
        id: Date.now(),
        title,
        date: new Date()
      }, ...this.state.items]
    });
  }

  toggleChecked = (id) => {
    this.setState({
      items: this.state.items.map((item) => (item.id !== id ) ? item : {
          ...item,
          done: !item.done
        }
      )
    })
  }

  render() {
    return (
      <div>
        We have {this.state.items.length} item(s)
        <Form onAdd={this.addTask}/>
        <Filter />
        <Table items={this.state.items} toggleChecked={this.toggleChecked}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
