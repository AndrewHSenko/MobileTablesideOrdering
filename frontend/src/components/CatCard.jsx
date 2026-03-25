import { Link } from 'react-router'

const CatCard = ({image, title}) => {
  return (
    <Link to="/menu" state={{activeMenu : title.toLowerCase()}} className="card text-center text-decoration-none rounded-3 my-2">
        <img src={image} alt={`${title} picture`} className="card-img-top"/>
        <h4 className="card-title lead my-1">{title}</h4>
    </Link>
  )
}

export default CatCard