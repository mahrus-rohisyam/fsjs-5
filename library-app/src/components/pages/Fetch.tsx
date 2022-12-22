import React, { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

type User = {
  id: number,
  name: string,
  email: string,
  address?: object,
  phone: number,
  website: string,
  company?: object
}

const Fetch = (props: Props) => {
  const { id }  = useParams();
  const [data, setData] = useState<User[]>([]);

  const baseUrl = "https://jsonplaceholder.typicode.com";

  const fetchingData = (url: string, path: string) => {
    fetch(url + path)
      .then((response) => response.json())
      .then((json) => {
        setData(prevData => prevData = json)
      });
  };

  const postHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Post");
    fetchingData(baseUrl, "/posts");
  };

  const userHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("User");
    fetchingData(baseUrl, "/users");
  };

  const commentHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Comment");
    fetchingData(baseUrl, "/comments");
  };

  useEffect(() => {    
    fetchingData(baseUrl, `/posts/${id}`)
  }, [data]);

  return (
    <>
      <button onClick={(e) => { postHandler(e); }}>POST</button>
      <button onClick={(e) => { userHandler(e); }}>USER</button>
      <button onClick={(e) => { commentHandler(e); }}>COMMENTS</button>
      {/* {data.map((v: User, i) => {
        return <p key={i}>{v.name}</p>
      })} */}
      {/* <span>{typeof data == "string" ? data : JSON.stringify(data)}</span> */}
      <span>{data[0].id}</span>
    </>
  );
};

export default Fetch;
