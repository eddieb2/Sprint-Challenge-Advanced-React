import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 1%;
  grid-column-gap: 1%;
`;

const CardList = props => {
  return (
    <CardListWrapper>
      {props.data.players.map(player => (
        /* console.log(item) */
        <Card player={player} />
      ))}
    </CardListWrapper>
  );
};

export default CardList;
