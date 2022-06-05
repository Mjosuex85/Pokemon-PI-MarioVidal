const axios = require('axios')
const pokemonBD = require('../db.js')

module.exports = {
    getAllPokemons: function getAllTypes() {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then(response => {
            let pokemons = response.data.results.map(pokemon => {
                return {
                    name: pokemon.name
                }
            })
            return pokemons
        })
    },
    
    getPokemonByName: function getPokeName(name) {
        return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
           var poke = response.data
           return poke
        })
 
    },

   getPokemonById: function getPokById(id) {
       return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
       .then(respose => {
           console.log(respose)
           return respose
       })
   }

}