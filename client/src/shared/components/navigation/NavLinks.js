import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to='/recipes' exact>RECIPES</NavLink>
      </li>
      <li>
        <NavLink to='/blog' exact>BLOG</NavLink>
      </li>
      <li>
        <NavLink to='/users' exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to='/auth' exact>AUTHENTICATE</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
