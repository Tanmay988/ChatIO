import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../Zustand/useConversation";
import useGetConversation from "../../Hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (search === "") return toast.error("Please enter a username");

    if (search.length < 3)
      return toast.error("Please enter atleast 3 characters");

    const foundConversation = conversation.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (foundConversation) {
      // Update the selected conversation with the found conversation
      setSelectedConversation(foundConversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form className="flex gap-2 p-2" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search a user"
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn rounded-full">
        <FaSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchInput;
