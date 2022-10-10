import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons} from '../store/actions'
import PokemonsCard from './PokemonsCard'
import { Link } from 'react-router-dom'

export default function PokemonsCards() {
    let allPokemons = useSelector((state) => state.pokemons)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

  return (
        <div>
          {
            allPokemons.map(pokemons => 
            <PokemonsCard 
              id={pokemons.id}
              name={pokemons.name} 
              image={pokemons.image} 
              type={pokemons.type}/>
            )
          }  
        </div>
  )
   
}