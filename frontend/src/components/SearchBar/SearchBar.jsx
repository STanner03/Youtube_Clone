import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchWord }) => {
  const [criteria, setCriteria] = useState("");
  const handleChange = (e) => setCriteria(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(criteria);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="text-bar"
        type="text"
        placeholder="Search here..."
        value={criteria}
        onChange={handleChange}
      />
      <button className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
