const { Router } = require('express');
const router = Router();
const pokemonRoute = require('./pokemons.js')
const type = require('./type.js')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonRoute)
router.use('/', type)


module.exports = router;
