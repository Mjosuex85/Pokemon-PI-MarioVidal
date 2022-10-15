import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons} from '../store/actions'
import PokemonsCard from './PokemonsCard'
/* import { Link } from 'react-router-dom' */
import style from '../styles/cards.module.css'

export default function PokemonsCards() {
    
  
  let allPokemons = useSelector((state) => state.pokemons)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])

  return (
        <div className={style.card__containter}>
          {
            allPokemons.map((pokemons, index) => 
            <div key={index}>
            <PokemonsCard 
              id={pokemons.id}
              name={pokemons.name} 
              image={pokemons.image} 
              type={pokemons.type}
              height={pokemons.height}
              attack={pokemons.attack}
              defense={pokemons.defense}
              speed={pokemons.speed}
              weight={pokemons.weight}
              />
              </div>

            )
          }  
        </div>
  )
   
}