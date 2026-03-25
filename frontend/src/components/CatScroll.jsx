import CatLink from "./CatLink"
import { Nav } from 'react-bootstrap'
import { useHeaderHeight } from "../layouts/HeaderHeightContext.jsx"

// Key: eventKey
// Text: name of menu category
const categories = {
  "popular" : {
    id: "popular",
    title: "Popular"
  },
  "sandwiches" : {
    id: "sandwiches",
    title: "Sandwiches"
  },
  "salads" : {
    id: "salads",
    title: "Salads"
  },
  "sides" : {
    id: "sides",
    title: "Sides"
  },
  "beverages" : {
    id: "beverages",
    title: "Beverages"
  }
}

const CatScroll = ({ activeMenu, setActiveMenu }) => {
  const { headerHeight } = useHeaderHeight()
  return (
    <div className="scroll sticky-top overflow-auto px-3 mb-3 py-1 z-1 border-bottom border-1 border-black bg-primary-subtle bg-opacity-25" style={{ top : headerHeight }}>
        <Nav className="d-flex flex-nowrap gap-4 fs-6 text-primary" activeKey={activeMenu} onSelect={(key) => setActiveMenu(key)}>
            {
              Object.values(categories).map((category) => (
                <CatLink key={category.id} eventKey={category.id} text={category.title} />
              ))
            }
            <CatLink eventKey="x" text="More Enthusiastic Candidates" />
            <div style={{minWidth : "1rem"}} />
        </Nav>
    </div>
  )
}

export default CatScroll