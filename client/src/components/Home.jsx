import React from 'react'
import Nav from './Nav'
import PokemonsCards from './PokemonsCards.jsx'
import style from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={style.img__backGround}>
       <h1>POKEMON APP</h1>
       <div> <Nav/> </div>
       <div> <PokemonsCards/></div> 
    </div>

  )
}
