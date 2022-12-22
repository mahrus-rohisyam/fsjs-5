import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode | JSX.Element;
  title: string;
};

const BlankTemplate = (props: Props) => {
  useEffect(() => {
    // Pertama
    document.title = props.title;
    console.log("Blank was Template Loaded");
    console.log(props.title);
  }, [])
  // Kedua
  return <div>{props.children}</div>;
};

export default BlankTemplate;
