import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components";
import closeIcon from "../../images/close-icon.svg";

const ModelWrapper = styled.div`
  background: #fff;
  z-index: 999;
  padding: 1em 2em 2em;
  position: fixed;
  width: 583px;
  top: 21%;
  bottom: 40px;
  left: 30%;
  height: 431px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: #000;
  opacity: 0.75;
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  height: 12%;
  font-weight: bold;
`;

const ModalContent = styled.div`
  display: flex;
  height: 88.5%;
`;

const CloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;

const ModalImage = styled.img`
  width: 42%;
  padding-right: 2rem;
`;

const MovieInfoContainer = styled.div`
  line-height: 1.5rem;
  overflow-y: auto;
`;

const MovieInfoBody = styled.p``;

const Modal = ({ visible, toggle = () => {}, movieInfo }) => {
  const {
    poster_path,
    vote_average,
    vote_count,
    overview,
    release_date,
    title,
  } = movieInfo;
  return visible
    ? ReactDOM.createPortal(
        <>
          <ModelWrapper role="dialog" aria-modal="true" onClick={() => {}}>
            <ModalHeaderWrapper>
              <h3>{title}</h3>
              <CloseButton onClick={toggle}>
                <img src={closeIcon} alt="close-x" />
              </CloseButton>
            </ModalHeaderWrapper>
            <ModalContent>
              <ModalImage
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt="movie-poster"
              />
              <MovieInfoContainer>
                <p>
                  <strong>Release date: </strong>
                  {moment(release_date).format("LL")}
                </p>
                <MovieInfoBody>{overview}</MovieInfoBody>
                <p>
                  <strong>{vote_average}</strong>/10 ({vote_count} total votes)
                </p>
              </MovieInfoContainer>
            </ModalContent>
          </ModelWrapper>
          <ModalBackdrop onClick={() => {}} />
        </>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Modal;
