const { Router } = require('express');
const router = Router();
const { Type } = require('../db')
const { getAllTypes } = require('../controllers/types.js')


router.get('/types', async (req, res) => {
    const types = await getAllTypes()
    console.log("este es el type", types[0])
    try {
        await types.map(types => Type.findOrCreate({
        where: {
            type: types
        }
    }) )

    const allTypes = await Type.findAll()
    return res.status(200).send(allTypes)
}
    
    catch(error) {
        console.log(error)
        res.send(error)
}
    
})

module.exports = router
