"use client"
import { Image } from '@mantine/core';
import ListOfPokemons from '../../components/ListOfPokemons';
const PokemonPage = () => {


  return (
    <>
      <Image width={240} mx="auto" radius="md" src="/pkmlogo.png" alt="Random image" />
      
      <ListOfPokemons/>
      
    </>
  );
};

export default PokemonPage;
