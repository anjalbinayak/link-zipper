import React, { useState } from "react";
import LinkInput from "./LinkInput";
import { FaFileArchive, FaPlus } from "react-icons/fa";
import InfoMessage from "./alerts/InfoMessage";
import Router from "next/router";
import axios from "axios";
const Form = () => {
  const [links, setLinks] = useState(["https://anjalbinayak.com.np"]);
  function changeLinkValue(index, newValue) {
    const newLinksList = links.map((v, i) => {
      if (i == index) return newValue;
      return v;
    });

    setLinks(newLinksList);
  }

  function removeLink(index) {
    const newLinksList = links.filter((v, i) => i !== index);
    setLinks(newLinksList);
  }

  async function handleZip() {
    const API_LINK = "http://127.0.0.1:8000/api/zip/";

    console.log(links);

    axios
      .post(
        API_LINK,
        {
          links: links,
          timestamp: new Date().getTime(),
        },
        {
          headers: {
            // "Cache-Control": "no-cache",
            // Pragma: "no-cache",
            // Expires: "0",
          },
        }
      )
      .then((resp) => {
        const linkId = resp.data;
        console.log(linkId);
        Router.push(`/${linkId}?open=false`);
      })
      .catch((err) => console.log(err));
  }

  //diable axios cache and check

  return (
    <div className="w-full mx-auto max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {links.map((value, index) => {
          return (
            <LinkInput
              key={index}
              index={index}
              handleChange={changeLinkValue}
              handleRemove={removeLink}
              link={value}
            />
          );
        })}

        {links.length == 0 ? <InfoMessage title={"No Links"} /> : ""}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => handleZip()}
          >
            <FaFileArchive
              style={{ display: "inline-block", verticalAlign: "baseline" }}
            />
            Zip
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setLinks([...links, ""])}
          >
            <FaPlus
              style={{ display: "inline-block", verticalAlign: "revert" }}
            />
            Add Link
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2021 Binayak. All rights reserved.
      </p>
    </div>
  );
};

export default Form;
