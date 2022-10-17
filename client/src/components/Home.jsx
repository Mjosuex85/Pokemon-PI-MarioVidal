import React from 'react'
import Nav from './Nav'
import PokemonsCards from './PokemonsCards.jsx'
import style from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={style.img__backGround}>
       <div> <Nav/> </div>
       <div> <PokemonsCards/></div> 
    </div>

  )
}
