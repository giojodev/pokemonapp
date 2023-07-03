"use client";
import {
  Image,
  Card,
  Text,
  Button,
  Group,
  Title,
  JsonInput,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import ImagenPokemon from "../components/ImageofPokemon";

interface Pokemon {
  name: string;
  url: string;
  id: number;
}

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=152&offset=0"
      );
      const data = await response.json();

      const poks = data.results.map((elements) => {
        const po = {
          name: elements.name,
          url: elements.url,
          id: 0,
        };
        const cnt = po.url.split("/");
        const cnt2 = cnt.length - 2;
        po.id = parseInt(cnt[cnt2]);
        if (po.id > 0) return po;
      });

      setPokemonData(poks);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  return (
    <>
      <section className="headerpokemon">
        <Image
          width={300}
          height={300}
          mx="auto"
          radius="md"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif"
          alt="Random image"
        />

        <Image
          width={240}
          mx="auto"
          radius="md"
          src="/pkmlogo.png"
          alt="Random image"
        />

        <Image
          width={300}
          height={"50%"}
          mx="auto"
          radius="md"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          alt="Random image"
        />
      </section>

      <div className="containerPokemon">
        {pokemonData.slice(0, pokemonData.length).map((poke) => (
          <div className="contenedorTexto">
            <Card
              shadow="sm"
              padding="md"
              radius="md"
              withBorder
              className="cartapokemon"
            >
              <Card.Section>
                <ImagenPokemon idpokemon={poke.id} />
              </Card.Section>

              {/* <Group position="apart" mt="md" mb="xs">
              <Text weight={500} className="nombrepoke">
                {poke.name}
              </Text>
            </Group> */}
              {/* <Text size="md" color="dimmed">
              {poke.url}
            </Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Revisar Pokemon
            </Button> */}
            </Card>
            <div className="nombrePokemon">
              <Text weight={500} className="nombrepoke">
                {poke.name}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemon;
