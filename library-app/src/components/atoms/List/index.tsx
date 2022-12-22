import React, { useState } from "react";
import './List.css'

type ListKey = {
  key: number;
  title: string;
};

type Props = {
  propsList: ListKey[];
  setPropList?: () =>
    | React.Dispatch<React.SetStateAction<ListKey[]>>
    | undefined
    | null;
};

const List: React.FC<Props> = ({ propsList, setPropList }) => {
  const [list, setlist] = useState<ListKey[]>([]);
  

  return (
    <ul>
      <li>
        {propsList.map((v: ListKey, i) => {
          console.log(v.title);
          return (
            <li key={i}>
              <p>
                {v.title} {v.key}
              </p>
            </li>
          );
        })}
      </li>
    </ul>
  );
};

export default List;
