import { Link } from 'react-router'

const CatCard = ({image, title}) => {
  return (
    <Link to="/menu" className="card text-center text-decoration-none rounded-3 my-2">
        <img src={image} alt={`${title} picture`} className="card-img-top"/>
        <h5 className="card-title my-1">{title}</h5>
    </Link>
  )
}

export default CatCard