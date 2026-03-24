import { useState } from 'react'
import { NavLink } from 'react-router'

const CatLink = ({ dest, text }) => {

  return (
    <NavLink to={dest} className={({ isActive }) =>`nav-link text-nowrap ${isActive ? 'text-secondary fw-bold' : ''}`}>{text}</NavLink>
  )
}

export default CatLink

// <button className={`nav-link text-nowrap ${location.pathname === dest ? "active fw-bold" : ""}`}>{text}</button>