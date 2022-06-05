const axios = require('axios') 


module.exports = {
    getAllTypes: function getTypes(){
        return axios.get(`https://pokeapi.co/api/v2/type`)
        .then(response => {
            return AllTypes = response.data.results.map(e => e.name)
        }
        )
    }
}