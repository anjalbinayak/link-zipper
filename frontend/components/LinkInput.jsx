import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
const LinkInput = ({ index, link, handleChange, handleRemove }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="link"
      >
        Links
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="link"
        type="link"
        placeholder={"Link " + (index + 1)}
        value={link}
        onChange={(e) => handleChange(index, e.target.value)}
      />
      <button
        className=" text-red-400 font-bold inline p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300  rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => handleRemove(index)}
      >
        <small>
          <FaTrash />
        </small>
      </button>
    </div>
  );
};

export default LinkInput;
