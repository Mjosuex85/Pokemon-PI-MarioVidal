import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/card.module.css'

export default function PokemonsCard(props) {
  return (
    
  <Link to={`/details/${props.id}`} style={{textDecoration: 'none', color: 'white'}}>
    <div className={style.containter_box}>
       <h4 className={style.title}>{props.name.toUpperCase()} </h4>
          <img className={style.image} src={props.image} alt="Img Not Found" width="280" height="280"/>
        <div className={style.types}>
          {props.type?.map((type, index) => <h4 key={index}> {type.toUpperCase()} </h4>)}
        </div>
    </div>
  </Link>
  )
}
