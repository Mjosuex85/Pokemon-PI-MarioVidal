const { Router } = require('express');
const router = Router();
const { Type } = require('../db')
const { getAllTypes } = require('../controllers/types.js')


router.get('/types', async (req, res) => {
    const types = await getAllTypes()
    try {
        await types.map(types => Type.findOrCreate({
        where: {
            type: types,
        }
    }) )

    const allTGenres = await Type.findAll()
    return res.status(200).send(allTGenres)
}
    
    catch(error) {
        console.log(error)
        res.send(error)
}
    
})

module.exports = router
