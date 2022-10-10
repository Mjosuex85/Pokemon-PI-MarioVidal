const { Router } = require('express');
const router = Router();
const { Pokemon } = require('../db')
const { getAllPokemons } = require('../controllers/pokemonAsyncAwait.js')


router.get("/", async (req, res) => {
    let { name } = req.query

    if (name) {
        const pokemons = await getAllPokemons()
        const pokemonsByName = pokemons.filter(pokemon => pokemon.name == name.toLocaleLowerCase())
        pokemonsByName.length ? res.status(200).send(pokemonsByName)
        : res.status(404).send({msg: "The pokemon doesn't exist"}) 
    }
    else {
        res.status(200).send(await getAllPokemons())
    }
})

router.get("/:id", async (req, res) => {
    let { id } = req.params
    const pokemons = await getAllPokemons()
    const returnId = pokemons.filter(pokemon => pokemon.id == id)
    returnId.length ? res.send(returnId) : res.send({msg: "We cannot find your ID, try another"})
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
        newPokemon.name = name.toLocaleLowerCase()
        console.log(" LA DATA",newPokemon)
        await newPokemon.save()
        res.json(newPokemon)
    }
        
    catch(error){
            console.log(error),
            res.send({msg: "Error"})
    }
})


module.exports = router