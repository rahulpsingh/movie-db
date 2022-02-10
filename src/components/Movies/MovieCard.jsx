import React from "react";
import styled from "styled-components";
import Modal from "../Modal";
import useModal from "../Modal/useModal";

const Flex = styled.div`
  display: flex;
`;

export const Title = styled.h3`
  font-size: 16px;
  line-height: 26px;
  font-weight: normal;
`;

const TitleWrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 348px;
  width: 100%;
  cursor: pointer;
`;

export const Image = styled.div`
  width: 100%;
  height: 302px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const BadgeWrapper = styled(Flex)`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  left: 4%;
  top: 4%;
  background: white;
  border: 1px solid black;
  text-align: center;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.strong`
  font-size: 12px;
  line-height: 20px;
`;

const MovieCard = ({ movieInfo }) => {
  const { toggle, visible } = useModal();

  const { title, vote_average, poster_path } = movieInfo;
  return (
    <>
      <Wrapper onClick={toggle}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie-poster"
        >
          <BadgeWrapper>
            <BadgeText>{vote_average}</BadgeText>
          </BadgeWrapper>
        </Image>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Wrapper>
      <Modal toggle={toggle} visible={visible} movieInfo={movieInfo} />
    </>
  );
};

export default MovieCard;
