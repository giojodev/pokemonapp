"use client";
import { Image, Card, Text, Button, Group,Title, JsonInput } from "@mantine/core";
import React, { useEffect, useState } from "react";


interface Pokemon {
  name: string;
  url: string;
  id:number;
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
      
      const poks = data.results.map(elements => {
        const po = {
          name: elements.name,
          url: elements.url,
          id: 0
        };
        const cnt = po.url.split("/");
        const cnt2 = cnt.length - 2;
        po.id = parseInt(cnt[cnt2]);
        return po;
      });
      
      setPokemonData(poks);
      
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  return (
    <>
     <Title order={1}>Lista de Pokemom</Title>
      <Image width={240} mx="auto" radius="md" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/25.png" alt="Random image" />

      
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
              {poke.url} {poke.id}
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
      
    </>
  );
};

export default Pokemon;
