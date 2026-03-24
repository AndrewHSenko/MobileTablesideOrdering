import { Nav } from 'react-bootstrap'

const CatLink = ({ eventKey, text }) => {
  return (
    <Nav.Link eventKey={eventKey} className="nav-link text-nowrap">{text}</Nav.Link>
  )
}

export default CatLink

// <button className={`nav-link text-nowrap ${location.pathname === dest ? "active fw-bold" : ""}`}>{text}</button>