import { useState, useEffect } from 'react'
import CatScroll from "../components/CatScroll"
import MenuContent from "../components/MenuContent"

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("popular");

  return (
    <div className="container-fluid mx-0 px-0">
      <CatScroll activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <MenuContent activeMenu={activeMenu}/>
    </div>
  )
}

export default Menu