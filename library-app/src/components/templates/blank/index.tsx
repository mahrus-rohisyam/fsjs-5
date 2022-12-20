import React from "react";

type Props = {
  children: React.ReactNode | JSX.Element;
};

const BlankTemplate = (props: Props) => {
  return <div>{props.children}</div>;
};

export default BlankTemplate;
