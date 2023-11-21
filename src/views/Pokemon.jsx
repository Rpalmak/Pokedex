import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

const handlePokemonChange = (pokemonName) => {
  setSelectedPokemon(pokemonName);
  navigate(`/pokemon/${pokemonName}`);
};



useEffect(() => {
  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      if (!response.ok) {
        throw new Error('Error al obtener la lista de pokemones');
      }

      const data = await response.json();
      const results = data.results;
      setPokemonList(results);
      if (results.length > 0) {
        setSelectedPokemon(results[0].name);
      }
    } catch (error) {
      console.error('Error al obtener la lista de pokemones:', error.message);
    }
  };

  fetchPokemonList();
}, []);

  return (
    <div className="text-center">
      <h1>Selecciona un Pokémon</h1>
      <select
        value={selectedPokemon}
        onChange={(e) => handlePokemonChange(e.target.value)}
        style={{ marginTop: '20px' }}
      >
        {pokemonList.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>

      {/* Integración con PokemonCard */}
      <PokemonCard selectedPokemon={selectedPokemon} />
    </div>
  );
}

export default Pokemon;
