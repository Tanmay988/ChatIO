import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <>
      <form className="flex gap-2 p-2 ">
        <input
          type="text"
          placeholder="Search a user"
          className="input input-bordered rounded-full  "
        />
        <button className="btn rounded-full">
          <FaSearch className="text-xl " />
        </button>
      </form>
    </>
  );
};

export default SearchInput;
