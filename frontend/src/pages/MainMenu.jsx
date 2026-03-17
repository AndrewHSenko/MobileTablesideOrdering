import { Link } from 'react-router'

const MainMenu = () => {
  return (
    <div>
      <button type="button" className="btn btn-danger">
        <Link to="order" className="text-light">Checkout</Link>
      </button>
    </div>
  )
}

export default MainMenu