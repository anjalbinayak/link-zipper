import React from "react";
import { useState, useEffect } from "react";
const Links = ({ id }) => {
  const [links, setLinks] = useState([]);
  const API_LINK = `http://127.0.0.1:8000/api/getlinks/${id}`;
  console.log(id);
  useEffect(() => {
    fetch(API_LINK, (resp) => {
      console.log("Hii");
      setLinks(resp);
    });
  }, []);
  return (
    <div>
      <ul>
        {links.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </div>
  );
};

export default Links;
