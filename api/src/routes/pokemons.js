const { Router } = require('express');
const router = Router();
const { Pokemon } = require('../db')
const { getPokemonByName, getAllPokemons, getPokemonById } = require('../controllers/pokemons.js')


router.get("/", async (req, res) => {
    const { name } = req.query
    const byName = await getPokemonByName(name)
    res.send(byName)


})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    console.log(id)
    
})


router.post("/", async (req, res) => {
    const {name, life, attack, defense, speed, height, weight } = req.body
        
    try {
        const newPokemon = await Pokemon.create({
            name, 
            life, 
            attack, 
            defense, 
            speed, 
            height, 
            weight
        });
        res.json(newPokemon)
    }
        
    catch(error){
            console.log(error),
            res.send(error)
    }
})


module.exports = router