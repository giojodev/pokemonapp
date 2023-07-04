"use client"
import { Image } from "@mantine/core"


const GifPokemon=(idpokemon)=>{
    // console.log(idpokemon.idpokemon);
    let url:string=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${idpokemon.idpokemon}.gif`;
    // let url:string=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idpokemon.idpokemon}.png`;

    // console.log(url);
    return(
        <>
            <Image src={url} height={90} alt="pokemon" />
        </>
    );
}

export default GifPokemon;