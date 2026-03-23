import { Link } from 'react-router'
import sandwich from '../assets/sandwich_icon.png'

const Header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="d-flex align-items-center flex-nowrap gap-3">
                    <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center bg-altblue rounded-5 m-0" aria-current="page">
                        <img src={sandwich} alt="sandwich icon" className="mx-2"/>
                    </Link>
                    <p className="text-center text-darkbg-emphasis lead mx-1 my-0 fs-5 fst-italic fw-bold">Huey's McSandwich Shop</p>
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