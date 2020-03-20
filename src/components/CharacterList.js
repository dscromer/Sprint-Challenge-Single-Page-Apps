import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

export default function CharacterList() {
 const [data, setData] = useState([]);

 const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 `

 useEffect(() => {
  axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(res => setData(res.data.results))
    .catch(err => `You hit an error: ${err}`);
}, []);
//console.log('data', data);

  return (
    <ListContainer className="character-list">
      {data.map(character => {
        return <CharacterCard character={character} />
      })}
    </ListContainer>
  );
}
