import axios from 'axios'
export const REQUEST_POKEMONS = "REQUEST_POKEMONS"
export const REQUEST_POKEMONS_BY_NAME = "REQUEST_POKEMONS_BY_NAME"
export const REQUEST_POKEMONS_BY_ID = "REQUEST_POKEMONS_BY_ID"
export const FILTER_BY_ATTACK_HIGH = "FILTER_BY_ATTACK_HIGH"
export const CLEAN_DATA = "CLEAN_DATA"
export const FILTER_BY_ATTACK_LOW = "FILTER_BY_ATTACK_LOW"
export const ATTACK_LOW = "REQUEST_TYPES"
export const REQUEST_TYPES = "REQUEST_TYPES"
export const BY_TYPE = "BY_TYPE"
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DESC = "ORDER_DESC"
export const FILTER_ALL_OR_DB = "FILTER_ALL_OR_DB"

let PokemonsRoute = `http://localhost:3001/pokemons/`
let TypesRoute = `http://localhost:3001/types`


export function getPokemons() {
    return function(dispatch) {
        try { return axios.get(PokemonsRoute)
               .then((pokemons) => {
                return dispatch({
                    type: REQUEST_POKEMONS,
                    payload: pokemons
                })
    })
    }
        catch(error) {
         console.log(error)
        }
}
};

export function searchPokemonsByName(name) {
    return async function(dispatch) {
        await axios.get(`http://localhost:3001/pokemons?name=`+ name)
        .then((pokemonsName) => {
            dispatch({
                type: REQUEST_POKEMONS_BY_NAME,
                payload: pokemonsName
            })
        })
    }
};

export function searchPokemonsById(id) {
    return async function(dispatch) {
        await axios.get(PokemonsRoute + id)
        .then((pokemonsById) => {
            dispatch({
                type: REQUEST_POKEMONS_BY_ID,
                payload: pokemonsById
            })
        })
    }
};

export function getTypes() {
    return async function(dispatch) {
        await axios.get(TypesRoute)
        .then((types) => {
            dispatch({
                type: REQUEST_TYPES,
                payload: types
            })
        })
    }
}

export function cleanData() {
    return async function (dispatch) {
        dispatch({
            type: CLEAN_DATA,
            payload: []
        })
    }
};

export function AttackHigh(payload) {
    return { type: FILTER_BY_ATTACK_HIGH, payload: payload } 
}

export function AttackLow(payload) {
    return { type: FILTER_BY_ATTACK_LOW, payload: payload }
}

export function byType(payload) {
    return { type: BY_TYPE, payload }
}

export function filterASC(payload) {
    return { type: ORDER_ASC, payload }
}

export function filterDESC(payload) {
    return {type: ORDER_DESC, payload}
}

export function filterDbAll(payload) {
    return {type:FILTER_ALL_OR_DB, payload }
}