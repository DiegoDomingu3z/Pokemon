





export class Pokemon{
    constructor(data){
        this.id = data.index || data.id
        this.name = data.name
        this.height = data.height
        this.weight = data.weight
        this.baseExperience = data.base_experience || data.baseExperience
        this.sprites = data.sprites?.back_default
      
        
    }




    static ListTemplate(pokemon){
        return `
        <div class="col-12">
        <div>
          <b class="selectable" onclick="app.pokemonController.getPokemonDetails('${pokemon.name}')">${pokemon.name}</b>
        </div>
      </div>
        `
    }

    get DetailsTemplate(){
        return `
        <div class="col-12 p-5 text-center">
            <div class="row bg-light elevation-3">
              <div class="col-12">
                <h2>${this.name}</h2>
  
              </div>
            </div>
            <div class="col-12">
              <div><img src="${this.sprites}" alt=""></div>
            </div>
            <div class="col-12">
              <div class="row bg-light elevation-3">
                <h5>Experience: ${this.baseExperience}</h5>
                </div>
                </div>
                </div>
                <div class="d-flex justify-content-between p-3"><button class="btn btn-danger">Stats</button>
                <button class="btn btn-danger">Catch</button></div>
          `
    }
}




