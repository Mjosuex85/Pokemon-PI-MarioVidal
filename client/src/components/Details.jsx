import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { searchPokemonsById, cleanData } from '../store/actions'
import { Link } from 'react-router-dom'

export default  function Details(props) {
  let details = useSelector((state) => state.details)
  var num = props.id

  let dispatch = useDispatch()
  useEffect(() =>  {
    dispatch(cleanData(num))
    dispatch(searchPokemonsById(num))
  }, [dispatch, num])

  return (
    <> 
        {details.map(details => {
         return (
         <div> 
              <Link to='/home'> <button>Go back</button></Link>
              <h1>{details.name.toUpperCase()}</h1> 
              <h1>Id: {details.id}#</h1>
              <img src={details.image} alt="NOT FOUND" width="600" height="600" />
              <p> Defense: {details.defense}</p>
              <p> Attack: {details.attack}</p>
              <p> Height: {details.height}</p>
              <p> Weight: {details.weight}</p>
              <p> Speed: {details.speed}</p>
              {details.type?.map(type => <h4> {type} </h4>)}
         </div>

         )
      }) }  
    </>
  )
}
