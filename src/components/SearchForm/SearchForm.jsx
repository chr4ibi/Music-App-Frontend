import React, { useState, useRef } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputContent = useRef();

  const handleSearch = (event) => {
    const searchTerm = inputContent.current.value;
    setSearchTerm(searchTerm);
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      props.handleSearch(searchTerm);
    } 
  };
  return (
    <React.Fragment>
      <div className="search-form">
        <input
          ref={inputContent}
          onChange={handleSearch}
          name="searchTerm"
          placeholder="Search for album, artist or playlist"
          autocomplete="off"
          type="search"
          id="formBasicEmail"
          class="form-control"
          value={searchTerm}
        ></input>
      </div>
    </React.Fragment>
  );
};
export default SearchForm;
