import React, { useState, useCallback } from "react";
import styled from "styled-components";
import search from "../../images/search.svg";
import getMovies from "../../utils/getMovies";
import debounce from "../../utils/debounceFunction";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid lightgrey;
  border-radius: 3px;
  justify-content: space-between;
  align-content: center;
  position: relative;
`;

const Input = styled.input`
  padding: 0px 35px 0px 35px;
  outline: none;
  border: none;

  &::placeholder {
    color: rgb(146, 146, 146);
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  height: 50%;
  top: 25%;
  left: 8px;
`;

const SearchBar = ({ setSearchResults }) => {
  const [input, setInput] = useState("");

  const getSearch = async (query) => {
    try {
      const res = await getMovies("search", query);
      setSearchResults(res);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceDropdown = useCallback(
    debounce((nextValue) => getSearch(nextValue), 400),
    []
  );

  const handleInput = (e) => {
    if (e.target.value === "") {
      setSearchResults([]);
    }
    const query = e.target.value.split(" ").join("+");
    debounceDropdown(query);
  };

  return (
    <FormWrapper>
      <Input
        onInput={(e) => setInput(e.target.value)}
        value={input}
        type="text"
        onChange={handleInput}
        placeholder="Search for a movie"
      />
      <SearchIcon className="search-icon" src={search} alt="search-img" />
    </FormWrapper>
  );
};

export default SearchBar;
