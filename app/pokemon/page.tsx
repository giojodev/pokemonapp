"use client"
import { Image } from '@mantine/core';
export default function Pokemon(){
    return(
        <>
        <Image maw={240} mx="auto" radius="md" src="/pkmlogo.png" alt="Random image" />
        <h1>Pokemones</h1>
        </>
    );
}