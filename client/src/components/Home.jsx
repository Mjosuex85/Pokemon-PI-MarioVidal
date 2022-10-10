import React from 'react'
import Nav from './Nav'
import PokemonsCards from './PokemonsCards.jsx'

export default function Home() {
  return (
    <div>
       <h1>POKEMON APP</h1>
       <div> <Nav/> </div>
       <div> <PokemonsCards/></div> 
    </div>

  )
}
