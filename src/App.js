import React, {useState} from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js'
import CharacterList from './components/CharacterList'
import Navigation from './components/Navigation'
import {Route} from 'react-router-dom'
import SearchForm from './components/SearchForm'

export default function App() {
  
  return (
    <main data-testid='app'>
      <Header />
      <Navigation />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/search' component={SearchForm} />
    </main>
  );
}
