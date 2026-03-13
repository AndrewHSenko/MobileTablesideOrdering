import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Z</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav">
                    <Link to="/" className="btn nav-link active" aria-current="page">Main Page</Link>
                    <Link to="order" className="btn">Checkout</Link>
                </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header