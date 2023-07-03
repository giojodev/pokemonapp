"use client"
import { Image } from "@mantine/core"


const ImagenPokemon=(idpokemon)=>{
    // console.log(idpokemon.idpokemon);
    let url:string=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idpokemon.idpokemon}.png`;
    // console.log(url);
    return(
        <>
            <Image src={url} height={60} alt="pokemon" />
        </>
    );
}

export default ImagenPokemon;