import { PokemonController } from "./Controllers/PokemonsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

pokemonController = new PokemonController()

}

window["app"] = new App();
