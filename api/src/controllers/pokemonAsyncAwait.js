const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemonByUrl = async (url) => {
    return axios.get(url) 
    .then(response => {
        var data = response.data
       return {
           id: data.id,
           name: data.name,
           type: data.types.map(type => type.type.name),
           height: data.height,
           weight: data.weight,
           attack: data.stats[1].base_stat,
           defense: data.stats[2].base_stat,
           speed: data.stats[5].base_stat,
           image: data.sprites.other.dream_world.front_default
       }
    })
}

const getAllPokemonsByApi = async () => {
    try {
        let arrPok = []
        let pokemons1 = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        let pokemons2 = await axios.get(pokemons1.data.next)
        let pokemons3 = await axios.get(pokemons2.data.next)
        let pokemons4 = await axios.get(pokemons3.data.next)
        let pokemons5 = await axios.get(pokemons4.data.next)
        let concatPokemons = pokemons2.data.results.concat(pokemons1.data.results).concat(pokemons3.data.results).concat(pokemons4.data.results).concat(pokemons5.data.results)
        let UrlPokemons = await concatPokemons.map(pokemon => arrPok.push(getPokemonByUrl(pokemon.url))) 
        let finalsPokemons = Promise.all(arrPok)
        
        return finalsPokemons
    }   

    catch(error) {
        console.log(error)
        return {msg: "error"}
    }
}

const getAllPokemons = async () => {
    try{
        const pokemonsByApi = await getAllPokemonsByApi()
        const pokemonsByBd = await Pokemon.findAll({
            include: {
                model: Type, through: { attributes: [] }
            }
        })
        const allPokemons = pokemonsByApi.concat(pokemonsByBd)
        return allPokemons;
    }

    catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllPokemons
}