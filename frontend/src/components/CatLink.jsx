import { useState } from 'react'

const CatLink = ({dest, text}) => {
  const [currentCat, setCurrentCat] = useState()

  return (
    <button className={`nav-link text-nowrap ${location.pathname === dest ? "active fw-bold" : ""}`}>{text}</button>
  )
}

export default CatLink