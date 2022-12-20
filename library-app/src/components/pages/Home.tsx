import React from "react";
import Button from "../atoms/Button";
import List from "../atoms/List";

function Home() {
  // const [, set] = useState(second)

  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
        inventore, tempore eos illum doloribus officia soluta dolores, omnis rem
        illo laudantium cumque? Explicabo nobis, tempora at nihil impedit
        praesentium sed!
      </p>
      <Button />
      <List
        propsList={[
          { key: 1, title: "First" },
          { key: 2, title: "Second" },
          { key: 3, title: "Third" },
        ]}
      />
    </>
  );
}

export default Home;
