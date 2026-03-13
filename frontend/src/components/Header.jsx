import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand">Z</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item"><Link to="order">Click me!</Link></li>
                        <li className="nav-item"><a className="nav-link" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Pricing</a></li>
                        <li className="nav-item"><a className="nav-link disabled" aria-disabled="true">Disabled</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header