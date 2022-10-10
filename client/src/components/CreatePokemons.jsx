import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Types from './Types.jsx'

export default function CreatePokemons() {
  const details = useSelector((state) => state.types)
  const [ pokemon, setPokemon ] = useState({})
  const [ typesForm, setTypes ] = useState([])
  

    function onInputChange(e) {
        e.preventDefault()
        setPokemon({
          ...pokemon,
          [e.target.name]: e.target.value,
          types: typesForm
        })
      }
      
      function onInputChange2(e) {
        e.preventDefault()
        setTypes([
          ...typesForm,
          e.target.value
        ])
        console.log(typesForm)
      }
      console.log(pokemon)
      
      function onSubmit(e) {
        e.preventDefault()
        axios.post(`http://localhost:3001/pokemons/`, pokemon)
        .then(response => {
          console.log("post")
        })
        console.log("este es el objeto que se envía", pokemon)
      }

  return (
    <div>
        <Link to='/home'><button>Go Back</button></Link>
                <h1> Create your Pokemon</h1>
        <form onSubmit={(e) => onSubmit(e)}>
            
            <label htmlFor=''>Name </label>
                <input onChange={onInputChange} name='name' type="text" value={pokemon.name} /> <br></br>
                
            <label htmlFor=''>Image </label>
                <input onChange={onInputChange} name='image' type="text" value={pokemon.image} /> <br></br>
            
            <label htmlFor=''>Attack </label>
                <input onChange={onInputChange} name='attack' type="text" value={pokemon.attack}/> <br></br>
            
            <label htmlFor=''>Life</label>
                <input onChange={onInputChange} name='life' type="text" value={pokemon.life} /> <br></br>
            
            <label htmlFor=''>Defense</label>
                <input onChange={onInputChange} name='defense' type="text" value={pokemon.defense} /> <br></br>
            
            <label htmlFor=''>Speed</label>
                <input  onChange={onInputChange}name='speed' type="text" value={pokemon.speed}/> <br></br>
            
            <label htmlFor=''>Height</label> 
                <input onChange={onInputChange} name='height' type="text" value={pokemon.height}/> <br></br> 
            
            <label htmlFor=''>Weight </label> 
                <input onChange={onInputChange} name='weight' type="text" value={pokemon.weight}/> <br></br>

            <label htmlFor=''> Types </label>
                <select onChange={onInputChange2} value={typesForm} > 
                  {details.map(t => {
                   return <option>{t.type}</option>
                  })}
                </select> <br></br><br></br>
            
            {/* <Types type={typesForm}/> */}
            {typesForm.map(t => {
              return <div>
                      <ul> <li>{t}</li> </ul>
                      </div>
            })}
            <input type='submit'/>
        </form>
            
          
    </div>
  )
}

