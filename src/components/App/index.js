import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

import { addItem, addItems } from "../../actions/items";

import Form from "../Form";
import Filter from "../Filter";
import Table from "../Table";
import { getItems } from "../../apiWrapper";

class App extends Component {
  state = {
    items: []
  };
  constructor() {
    super();
    getItems().then(items => this.props.addItems(items));
  }

  render() {
    return (
      <div>
        We have {this.state.items.length} item(s)
        <Form />
        <Filter />
        <Table items={this.props.items} />
      </div>
    );
  }
}

// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

const mapStateToProps = (state /*, _ownProps*/) => ({
  items: state.items
});

const mapDispatchToProps = {
  addItems
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
