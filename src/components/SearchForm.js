import React, { useState, useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components'
import CharacterCard from "./CharacterCard";

const SearchForm = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `
  const Name = styled.p`
    font-size: 24px;
  `

  useEffect(() => {
   axios
     .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
     .then(res => setData(res.data.results))
     .catch(err => `You hit an error: ${err}`);
 }, []);

 const handleChange = event => {
  setSearchTerm(event.target.value);
};
useEffect(() => {
  const results = data.filter(character =>
    character.name.toLowerCase().includes(searchTerm)
  );
  setSearchResults(results);
}, [searchTerm]);

 
return (
  <div>
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
    />
    <Characters>
       {searchResults.map(character => (
        <div>
        <Name>{character.name}</Name>
        <img src={character.image} />
        <ul>
          <li>Status: {character.status}</li>
          <li>Species: {character.species}</li>
          <li>Origin: {character.origin.name}</li>
        </ul>
      </div>
      ))}
    </Characters>
  </div>
);
}

export default SearchForm;
