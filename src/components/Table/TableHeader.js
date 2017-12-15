/* Если не импортировать React (хотя кажется, что он не используется в файле) - код работать не будет

Все дело в том, в какой код транспилируется jsx

```
const btn = () => <button>Wow</button>
```
превратится в

```
"use strict";

var btn = function btn() {
  return React.createElement(
    "button",
    null,
    "Wow"
  );
};
```

так, что если React не будет определен - код работать не будет
*/
import React from 'react';

const TableHeader = ({onSort, columns}) => (
  <thead>
    <tr>
      {columns.map(name => (
        <th>
        {name}
        </th>
      ))}
    </tr>
    <tr>
      {columns.map(name => (
        <th>
        <button onClick={() => onSort(name)}>^</button><br />
        <button onClick={() => onSort(`-${name}`)}>v</button>
        </th>
      ))}
    </tr>
  </thead>
);

export default TableHeader;