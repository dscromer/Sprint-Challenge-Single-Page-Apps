import React from "react";
import styled from 'styled-components'

const CharacterCard = props => {
  const Name = styled.p`
    font-size: 24px;
  `
  return (
    <div>
      <Name>{props.character.name}</Name>
      <img src={props.character.image} />
      <ul>
        <li>Status: {props.character.status}</li>
        <li>Species: {props.character.species}</li>
        <li>Origin: {props.character.origin.name}</li>
      </ul>
    </div>
  )
}

export default CharacterCard;