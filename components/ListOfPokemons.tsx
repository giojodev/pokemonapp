"use client";
import { Image, Card, Text, Button, Group } from "@mantine/core";
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
        "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
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
      <div className="container">
      {pokemonData.slice(0, pokemonData.length).map((poke) => (
       
          <Card
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
            className="cartapokemon"
          >
            <Card.Section>
              <Image src="../public/pkmlogo.png" height={160} alt="pokemon" />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500} className="nombrepoke">{poke.name}</Text>
            </Group>
            <Text size="md" color="dimmed">
              {poke.url}
            </Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Revisar Pokemon
            </Button>
          </Card>
        

        // <article key={poke.name}>
        //   <h1 style={{color:"#09f"}}>{poke.name}</h1>
        //   <p>{poke.url}</p>
        // </article>
      ))}
      </div>
    </>
  );
};

export default Pokemon;
