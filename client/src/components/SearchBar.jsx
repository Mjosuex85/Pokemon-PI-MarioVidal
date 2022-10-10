import React from 'react'
import { searchPokemonsByName } from '../store/actions/index.js'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function SearchBar() {
  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  
  function onSubmit(event) {
    event.preventDefault()
    dispatch(searchPokemonsByName(search))
  }

  function onChange(event) {
    event.preventDefault()
    setSearch(event.target.value)
  }
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} placeholder="Pokemon..." value={search}  />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
