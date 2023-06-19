"use client";
import { Image } from "@mantine/core";
import React, { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );
      const data = await response.json();
      setPokemonData(data.results);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  return (
    <>
    <h1>Listado de Pokemones</h1>
    <hr></hr>
      {pokemonData.slice(0, 5).map((poke) => (
        <article key={poke.name}>
          <h1 style={{color:"#09f"}}>{poke.name}</h1>
          <p>{poke.url}</p>
        </article>
      ))}
    </>
  );
};

export default Pokemon;
