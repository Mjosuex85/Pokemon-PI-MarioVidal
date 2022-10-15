import React from 'react'
import { useState } from 'react'

export default function Types(props) {
    /* let typeARR = []
    type.map(t => typeARR.push(t)) */
    const [ty, setTy] = useState([])
    
    setTy(props.type.map(t => ty.push(t)))

    
/* function handleChange(e) {
    e.preventDefault()
    console.log(e.target.innerTEXT)
    typeARR.filter(t => t !== e.target.innerTEXT)
} */


return (
    <div>
        este es el type exportado
        {props.type.map((type, index) => {
            return <div key={index}>    
                        <ul>
                        <li> {type} </li>
                        </ul> 
                   </div>
        })} 
    </div>
)
}   
