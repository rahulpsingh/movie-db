import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import { MovieGrid } from "./Movies";
import getMovies from "../utils/getMovies";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 48px;
`;

const NavbarContainer = styled.div``;

const App = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const movieList = searchResults.length ? searchResults : recentMovies;
  const header = searchResults.length ? "Search Results" : "Most Recent Movies";
  const request = searchResults.length ? "search" : "recent";
  const action = searchResults.length ? setSearchResults : setRecentMovies;

  useEffect(() => {
    getMovies(request).then((res) => {
      action(res);
    });
  }, []);

  return (
    <Main>
      <NavbarContainer>
        <NavBar setSearchResults={setSearchResults} />
      </NavbarContainer>
      <MovieGrid header={header} movieList={movieList} />
    </Main>
  );
};

export default App;
