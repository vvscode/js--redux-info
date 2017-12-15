import React from "react";
import { connect } from "react-redux";

import { toggleCheck } from "../../actions/items";

/*
 Если компонент не имеет своего состояния - используем pure component
*/
const TableItem = ({
  id,
  done,
  title,
  description,
  date,
  importance,
  toggleCheck
}) => (
  <tr>
    <td>{id}</td>
    <td>
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          toggleCheck(id);
          return false;
        }}
      />
    </td>
    <td title={description}>{title}</td>
    <td>{importance}</td>
    <td>{date.getDay()}</td>
  </tr>
);

const mapDispatchToProps = {
  toggleCheck
};
export default connect(undefined, mapDispatchToProps)(TableItem);
