import { Link } from 'react-router'

const MainMenu = () => {
  return (
    <div>
      <button type="button" className="btn btn-warning">
        <Link to="order">Checkout</Link>
      </button>
    </div>
  )
}

export default MainMenu