const axios = require('axios')
const { Pokemon, Type } = require('../db')

module.exports = {
    getAllPokemonsByApi: function getAllPokA() {
        let promisePk = []
        let firstPokemons = axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => {
          return response.data.results
        })

        let secondPokemons = axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => {
            return axios.get(response.data.next)
            .then(response	=> {
                return response.data.results
            })
        })
        var toPro = promisePk.push(firstPokemons,secondPokemons)
        var allPk = Promise.all(promisePk)
        return allPk     

    },  

    getAllPokemonsByDb: function getAllPokB(){
        return Pokemon.findAll({
            include: {
                model: Type, through: {attributes: []}
            }
        })
    },

    getPokemonByUrl: function getPokeName(url){
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
    },

}

