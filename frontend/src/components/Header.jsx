import { useHeaderHeight } from "../layouts/HeaderHeightContext.jsx"
import { Link } from 'react-router'
import logo from '../assets/logo.png'

const Header = () => {
    const { headerRef } = useHeaderHeight()
    return (
        <header ref={headerRef} className="sticky-top z-2">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="d-flex align-items-center flex-nowrap gap-2">
                        <Link to="/" className="navbar-brand ms-2" aria-current="page">
                            <img src={logo} alt="sandwich icon" className="w-100"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse w-100 pt-1" id="navbar">
                        <div className="navbar-nav gap-2">
                            <Link to="/" className="btn border-1 border-dark mx-auto" aria-current="page">Main Menu</Link>
                            <Link to="order" className="btn border-1 border-dark mx-auto">Checkout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header