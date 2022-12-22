import React, { SyntheticEvent, useState } from "react";
import BlankTemplate from "../templates/blank";
import Image from "../atoms/Image";

// type Props = {};

type Form = {
  data: {
    name: string;
    address: string;
  },
  count: number;
}

const Playground: React.FC = () => {
  const [count, setCount] = useState<number>(0);  
  const [state, setState] = useState<{data: object, count: number}>({data: {}, count: 0})

  const increment = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();    
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const changeForm = (e: SyntheticEvent) => {
    e.preventDefault();
    setState({
      data: {
        name: "Mahrus",
        address: "Bekasi"
      },
      count: 10
    })
  }

  return (
    <BlankTemplate title="Mahrus Sayid">
      <button onClick={(e) => { increment(e) }} >+</button>
      <span>{count == 0 ? "Isinya kosong" : count}</span>
      {/* <span>{count != 0 && count}</span> */}
      <button onClick={(e) => { decrement(e) }}>-</button>
      <br />
      <p>{JSON.stringify(state)}</p>
      <button onClick={(e) => { changeForm(e) }}>CHANGE FORM</button>
      {/* <p>Dibawah ini image</p> */}
      {/* <Image src="https://cdn.pixabay.com/photo/2022/11/05/20/18/zebra-7572734_960_720.jpg" /> */}
    </BlankTemplate>
  );
};

export default Playground;
