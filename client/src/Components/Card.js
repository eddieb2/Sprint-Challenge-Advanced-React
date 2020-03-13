import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = props => {
  return (
    <CardWrapper>
      <p>Name: {props.player.name}</p>
      <p>Country: {props.player.country}</p>
      <p>Searches: {props.player.searches}</p>
    </CardWrapper>
  );
};

export default Card;
