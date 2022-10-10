import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonsCard(props) {
  return (
    
      <Link to={`/details/${props.id}`}>
    <div>
       <h3>{props.name.toUpperCase()}</h3>
      <img src={props.image} alt="Img Not Found" width="300" height="300"/>
      <div>
      {props.type?.map(type => <h4> {type} </h4>)}
      </div>
     
    </div>
     </Link>
  )
}
