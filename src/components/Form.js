import React, { Component } from "react";
import { addItem } from "../actions/items";
import { connect } from "react-redux";

class Form extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    let title = this.refs.title.value;
    if (title) {
      this.props.addItem({
        title
      });
      ev.target.reset();
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="title" placeholder="Title" autoFocus="true" />
        <button>Add</button>
      </form>
    );
  }
}

export default connect(undefined, { addItem })(Form);
