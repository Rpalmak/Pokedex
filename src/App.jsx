import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter basename="/">
      {/* <PokemonProvider> */}
      <Header />
      <Container className='my-4 bg-light rounded shadow-sm p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/pokemon' element={<Pokemon />} /> 
          <Route path='/pokemon/:pokemonName' element={<Pokemon />} />
        </Routes>
      </Container>
      {/* </PokemonProvider> */}
    </BrowserRouter>
  );
}