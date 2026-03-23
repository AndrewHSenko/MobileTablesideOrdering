import { Link } from 'react-router'

const CatLink = ({dest, text}) => {
  return (
    <Link to={dest} className={`nav-link text-nowrap ${location.pathname === dest ? "active fw-bold" : ""}`}>{text}</Link>
  )
}

export default CatLink