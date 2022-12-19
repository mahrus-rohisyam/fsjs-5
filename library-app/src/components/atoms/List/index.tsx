import React, { useState } from "react";
// name: string, key: number, value: string || number || object || boolean

type ListKey = {
  name: string;
  key: number;
};

type Props = {
  name: string;
  key: number;
};

const List: React.FC<Props> = ({ name, key }) => {
  const [list, setlist] = useState<ListKey[]>([]);

  return (
    <ul>
      {/* {list.map((v: ListKey, i) => {
        return (
          <li key={i}>
            {v.name} {v.key}
          </li>
        );
      })} */}
      {name} {key}
    </ul>
  );
};

export default List;
