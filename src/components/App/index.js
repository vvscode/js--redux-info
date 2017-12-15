import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

import { loadItems } from "../../actions/items";

import Form from "../Form";
import Filter from "../Filter";
import Table from "../Table";

class App extends Component {
  constructor(...args) {
    super(...args);
    this.props.loadItems();
  }

  render() {
    return (
      <div>
        We have {this.props.items.length} item(s)
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
  loadItems
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
