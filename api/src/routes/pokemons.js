const { Router } = require('express');
const router = Router();
const { Pokemon } = require('../db')
const { getAllPokemonsByApi, getAllPokemonsByDb, getPokemonByUrl} = require('../controllers/pokemonsPromise.js')

router.get("/", async (req, res) => {
    let { name } = req.query
    let allPokemons = []
    
    try { 
        if(!name) {

        const pkByApi = await getAllPokemonsByApi()
        const pkBd = await getAllPokemonsByDb()
        const allpk = pkByApi.flat().map(p => allPokemons.push(getPokemonByUrl(p.url)))
        const pokemonApi = await Promise.all(allPokemons)
        const byName = pokemonApi.concat(pkBd)
        return res.status(200).json(byName)
    }
    else {
        const pkByApi = await getAllPokemonsByApi()
        const pkBd = await getAllPokemonsByDb()
        const allpk = pkByApi.flat().map(p => allPokemons.push(getPokemonByUrl(p.url)))
        const pokemonApi = await Promise.all(allPokemons)
        const done = pokemonApi.concat(pkBd)
        const all = done.filter(poke => poke.name == name)

        return res.status(200).json(all)
    }
}
 
    catch(error) {
        console.log(error)
        res.send({msg: "Error"})
    }
    
})

router.get("/:id", async (req, res) => {
    let allPokemons = []
    let { id } = req.params

    const pkByApi = await getAllPokemonsByApi()
        const pkBd = await getAllPokemonsByDb()
        const allpk = pkByApi.flat().map(p => allPokemons.push(getPokemonByUrl(p.url)))
        const pokemonApi = await Promise.all(allPokemons)
        const done = pokemonApi.concat(pkBd)
        const byId = done.filter(poke => poke.id == id)

        return res.status(200).json(byId)
})



router.post("/", async (req, res) => {
    const {name, life, attack, defense, speed, height, weight, image } = req.body
        
    try {
        const newPokemon = await Pokemon.create({
            name, 
            life, 
            attack, 
            defense, 
            speed, 
            height, 
            weight,
            image
        });
        res.json(newPokemon)
    }
        
    catch(error){
            console.log(error),
            res.send({msg: "Error"})
    }
})


module.exports = router