import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/pokemonBag.js";


const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    setTimeout: 5000
})



class PokemonService{
    async getPokemon(){
        const res = await pokemonApi.get()
        console.log('getPokemon', res.data);
        ProxyState.PokemonAP = res.data.results.map(p => p)
    }


    async getPokemonDetails(name){
        const res = await pokemonApi.get(name)
        console.log('getPokemonDetails', res.data);
        ProxyState.activePokemon = new Pokemon(res.data)
    }





}



export const pokemonService = new PokemonService()