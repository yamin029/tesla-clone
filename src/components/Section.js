import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  return (
    <Wrap bg={props.backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftButtonText}</LeftButton>
            {props.rightButtonText && (
              <RightButton>{props.rightButtonText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DownArrow src={`./images/down-arrow.svg`} />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(images/${props.bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  overflow-x: hidden;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div``;

const ButtonGroup = styled.div`
  overflow-x: hidden;
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  align-item: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 48px;
  width: 265px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.6;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
  margin-bottom: 3px;
`;
