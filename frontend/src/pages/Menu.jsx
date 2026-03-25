import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import CatScroll from "../components/CatScroll"
import MenuContent from "../components/MenuContent"

const Menu = () => {
  const location = useLocation()
  const { active } = location.active || {"popular"}
  const [activeMenu, setActiveMenu] = useState(active);
  return (
    <div className="container-fluid mx-0 px-0">
      <CatScroll activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <MenuContent activeMenu={activeMenu}/>
    </div>
  )
}

export default Menu