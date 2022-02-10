import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const Flex = styled.div`
  display: flex;
`;

const MovieGridWrapper = styled(Flex)`
  width: 1200px;
  margin: 0 auto;
  flex-direction: column;
`;

const MovieCardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 26px;
  padding: 0;
  height: fit-content;
`;

export const Header = styled.h1`
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 3vh 0vh 2vh 0vh;
`;

const MovieGrid = ({ movieList, header }) => {
  return (
    <MovieGridWrapper>
      <Header>{header}</Header>
      <MovieCardContainer>
        {movieList.map((movie, i) => (
          <MovieCard key={i} movieInfo={movie} />
        ))}
      </MovieCardContainer>
    </MovieGridWrapper>
  );
};

export default MovieGrid;
