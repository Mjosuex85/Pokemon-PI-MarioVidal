import React, { useEffect /* useState  */} from 'react'
import SearchBar from './SearchBar.jsx'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AttackHigh, AttackLow, getTypes, byType, filterASC, filterDESC, filterDbAll} from '../store/actions/index.js'
import { useSelector } from 'react-redux'
import style from '../styles/nav.module.css'
import img from '../Images/Poké_Ball_icon.svg.png'

export default function Nav() {
  let allTypes = useSelector((state) => state.types)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])


  function firstFilter(e) {
    e.preventDefault()
    e.target.value === "Attack+" ? dispatch(AttackHigh())
    : dispatch(AttackLow())
  };

  function filterType(e) {
    e.preventDefault()
    dispatch(byType(e.target.value.toString().toLowerCase()))
  };

  function filterByABC(e) {
    e.preventDefault()
    e.target.value === 'asc' ? dispatch(filterASC()) : dispatch(filterDESC())
  };

  function filterAllPokemons(e) {
    e.preventDefault()
    dispatch(filterDbAll(e.target.value)) 
  };

  return (
      <nav class="navbar navbar-light bg-light justify-content-between">
        <div className={style.navBar} > 
          <a class="navbar-brand"> <img src={img} alt="" width="60px" /> </a>
          
          
        <Link to='/create'> <button> Create your own Pokemon </button> </Link>
        
        <select  onChange={(e) => firstFilter(e)}>
          <option enable>Order Attack by...</option>
          <option value="Attack+">highest to lowest </option>
          <option value="Attack-">lowest to highest </option>
        </select>

        <select onChange={(e) => filterByABC(e)}>
          <option enable>Order Attack by...</option>
          <option value='asc'> A - Z </option>
          <option value='desc'> Z - A </option>
        </select>

        <select defaultValue='Order By...' onChange={(e) => filterAllPokemons(e)}>
          <option value="all">All</option>
          <option value="Created by you">Created by you</option>
        </select>

        <select onChange={(e) => filterType(e)}>
          <option enable>Order By type...</option>
          {allTypes.map((types, index) => {
            return <option key={index} value={types.type.toLocaleUpperCase()}>{types.type.toLocaleUpperCase()}</option>
          })}
          </select>
        </div>



        <div>
            <SearchBar/>
        </div>


      </nav>
    
  )
};