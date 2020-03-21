import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {

    const Nav = styled.div`
        background-color: black;
        padding: 10px;
        margin-bottom: 20px;
    `
    const NavCont = styled.div`
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin: 0 auto;
    `

  return (
    <Nav>
      <NavCont>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to='/search'>Search</Link>
      </NavCont>
    </Nav>
  );
};

export default Navigation;