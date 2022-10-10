import { REQUEST_POKEMONS, 
        REQUEST_POKEMONS_BY_ID, 
        REQUEST_POKEMONS_BY_NAME, 
        FILTER_BY_ATTACK_HIGH, 
        FILTER_BY_ATTACK_LOW,
        REQUEST_TYPES,
        CLEAN_DATA,
        BY_TYPE,
        ORDER_ASC,
        ORDER_DESC,
        FILTER_ALL_OR_DB
}   from "../actions";

let initialState = {
    pokemons: [],
    allPokemonsCopy: [],
    types: [],
    details: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_POKEMONS:
            return {
                ...state,
                pokemons: action.payload.data,
                allPokemonsCopy: action.payload.data
            }
        case REQUEST_POKEMONS_BY_ID: 
            return {
                ...state,
                details: action.payload.data
            }
        case REQUEST_POKEMONS_BY_NAME:
            return {
                ...state,
                pokemons: action.payload.data
            }

        case REQUEST_TYPES:
            return {
                ...state,
                types: action.payload.data
            }

        case FILTER_BY_ATTACK_HIGH:
            let byAttack = state.allPokemonsCopy.sort((b, a) => a.attack - b.attack)
            return {
                ...state,
                pokemons: [...byAttack]
            }

        case FILTER_BY_ATTACK_LOW: 
            let byASC = state.allPokemonsCopy.sort((a, b) => a.attack - b.attack)
            
            return {
                ...state,
                pokemons: [...byASC]
            }

        case ORDER_ASC: 
        function compare( a, b ) {
            if ( a.name < b.name ) { return -1; }
            if ( a.name > b.name ) { return 1; }
            return 0;
        }
            let az = state.allPokemonsCopy.sort(compare)
            
            /* az.sort(compare) */

            return {    
                ...state,
                pokemons: [...az]
            }       

        case ORDER_DESC: {
            let za = state.allPokemonsCopy
            function compare( a, b ) {
                if ( a.name > b.name ) { return -1; }
                if ( a.name < b.name ) { return 1; }
                return 0;
            }
            
            za.sort(compare)

            return {    
                ...state,
                pokemons: [...za]
            }  
        }

        case BY_TYPE:
            let filter = state.allPokemonsCopy.filter((e) => e.type)
            let ByType = filter.filter(e => e.type.includes(action.payload))
        
            return {
                ...state,
                pokemons: ByType
            }

        case FILTER_ALL_OR_DB:
            let db = state.allPokemonsCopy
            var dbf;
            action.payload === 'Created by you' ? dbf = db.filter(c => c.created) : dbf = db
            
            return {    
                ...state,
                pokemons: [...dbf]
            }
        
        case CLEAN_DATA:
                return {
                    ...state,
                    details: action.payload,
                };
        
        default: {
            return state;
        }
    }
}