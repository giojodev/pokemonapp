import { Modal } from "@mantine/core";
import {useDisclosure} from "@mantine/hooks"
import GifPokemon from "./GifOfPokemons";  
const modalPokemon = (idpokemon)=>{
    const [opened,{open,close}]=useDisclosure(false);
return(
    <>
    <Modal opened={opened} onClose={close} title="Pokemon">
        <GifPokemon idpokemon={idpokemon.idpokemon} />
    </Modal>
    </>
);
};

export default {modalPokemon};