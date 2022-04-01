import React from 'react'
import { NavLink } from 'react-router-dom'



export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          {/* <a href='/' className={({isActive}) => isActive ? 'active' : ''} >
            Peliculas
          </a>           */}
          <a href='/'  >
            Peliculas
          </a> 
        </li>             
      </ul>
    </div>
  )
}
