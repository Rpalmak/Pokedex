import React, { useEffect, useState } from 'react';

function PokemonCard({ selectedPokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        if (!selectedPokemon) {
          return;
        }
  
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del Pokémon');
        }
  
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error al obtener los detalles del Pokémon:', error.message);
        // Puedes agregar aquí una lógica adicional para manejar el error, por ejemplo, mostrar un mensaje al usuario.
      }
    };
  
    fetchPokemonDetails();
  }, [selectedPokemon]);

  if (!pokemonDetails) {
    return null; // Puedes mostrar un indicador de carga o un mensaje aquí si deseas
  }

  return (
    <div className="text-center" style={{ marginTop: '20px' }}>
      <h2>Detalles de {selectedPokemon}</h2>
      <img
        src={pokemonDetails.sprites.front_default}
        alt={selectedPokemon}
        style={{ width: '150px' }}
      />
      <p>Altura: {pokemonDetails.height}</p>
      <p>Peso: {pokemonDetails.weight}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
}

export default PokemonCard;
