import React from "react";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  return (
    <>
      <h1>This is a Book</h1>
      <h2>I am param {id}</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
        accusamus amet non dolores cumque consequuntur! Optio, eius. Corporis
        debitis ratione, nam pariatur dignissimos ducimus adipisci accusamus
        voluptates, obcaecati asperiores nisi.
      </p>
    </>
  );
}

export default Book;
