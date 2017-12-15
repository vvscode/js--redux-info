import React, { Component } from "react";

import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import sortBy from "../../utils/sortBy";

import "./Table.css";

const columns = ["id", "done", "title", "importance", "date"];

class Table extends Component {
  state = {
    sortBy: "id"
  };
  handleSort = sortBy => {
    this.setState({ sortBy });
  };
  render() {
    let sortedItems = sortBy(this.props.items, this.state.sortBy);

    return (
      <table>
        <TableHeader onSort={this.handleSort} columns={columns} />
        <tbody>
          {sortedItems.map(item => <TableItem key={item.id} {...item} />)}
        </tbody>
      </table>
    );
  }
}

export default Table;
