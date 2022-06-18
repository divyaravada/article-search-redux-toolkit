import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncArticles } from "../../features/articles/articleSlice";
import searchIcon from "../images/icons8-search-50.png";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search === "") return alert("Please enter search!");
    const filter = { search, pageNumber: 0 };
    dispatch(fetchAsyncArticles(filter));
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="box border border-1">
        <input
          type="text"
          placeholder="e.g sports"
          className="py-1"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <img src={searchIcon} alt="search icon image" />
      </form>
    </div>
  );
};
export default Search;
