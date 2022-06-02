import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/pokemonBag.js"
import { pokemonService } from "../Services/PokemonService.js"
import { Pop } from "../Utils/Pop.js"




function _draw(){
    let pokemon = ProxyState.PokemonAP
    let template = ''
    pokemon.forEach( p => template += Pokemon.ListTemplate(p))
    document.getElementById('api-pokemon').innerHTML = template
}


function _drawPokemonDetails(){
    let pokemon = ProxyState.activePokemon
    document.getElementById('pokemon-details').innerHTML = pokemon.DetailsTemplate
}


export class PokemonController {
    constructor() {
        console.log(' load PokemonAPI', ProxyState.PokemonAP);
        ProxyState.on('PokemonAP', _draw)
        ProxyState.on('activePokemon', _drawPokemonDetails)
        _draw()
        this.getPokemon()
    }

    async getPokemon(){
        try {
            await pokemonService.getPokemon()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }
    }


    async getPokemonDetails(name){
        try {
            pokemonService.getPokemonDetails(name)
        } catch (error) {
            console.log(error);
            Pop.toast(error.message, 'error')
        }
    }

}
