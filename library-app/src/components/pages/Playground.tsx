import React, { SyntheticEvent, useState } from "react";
import Blank from "../templates/blank";
import BlankTemplate from "../templates/blank";
import Image from "../atoms/Image";

// type Props = {};

const Playground = () => {
  const [count, setCount] = useState<number>(0);

  const addNumber = (e: SyntheticEvent): void => {
    e.preventDefault();
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  };

  const substractNumber = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (count !== 0) {
      setCount((prevCount) => prevCount - 1);
      // setCount(count - 1);
    }
  };

  return (
    <BlankTemplate>
      <button
        onClick={(e) => {
          addNumber(e);
        }}
      >
        +
      </button>
      <span>{count}</span>
      <button
        onClick={(e) => {
          substractNumber(e);
        }}
      >
        -
      </button>
      <p>Dibawah ini image</p>
      <Image src="https://cdn.pixabay.com/photo/2022/11/05/20/18/zebra-7572734_960_720.jpg" />
    </BlankTemplate>
  );
};

export default Playground;
