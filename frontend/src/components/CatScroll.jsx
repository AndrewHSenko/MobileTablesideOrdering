import CatLink from "./CatLink"
import { Nav } from 'react-bootstrap'
import { useHeaderHeight } from "../layouts/HeaderHeightContext.jsx"

const CatScroll = ({ activeMenu, setActiveMenu }) => {
  const { headerHeight } = useHeaderHeight()
  return (
    <div className="scroll sticky-top overflow-auto px-5 mb-3 py-1 z-1 border-bottom border-1 border-black bg-primary-subtle bg-opacity-25" style={{ top : headerHeight }}>
        <Nav className="d-flex flex-nowrap gap-5 fs-6 text-primary" activeKey={activeMenu} onSelect={(key) => setActiveMenu(key)}>
            <CatLink eventKey="popular" text="Popular" />
            <CatLink eventKey="sandwiches" text="Sandwiches" />
            <CatLink eventKey="salads" text="Salads" />
            <CatLink eventKey="sides" text="Sides" />
            <CatLink eventKey="beverages" text="Beverages" />
            <div style={{minWidth : "1rem"}} />
        </Nav>
    </div>
  )
}

export default CatScroll