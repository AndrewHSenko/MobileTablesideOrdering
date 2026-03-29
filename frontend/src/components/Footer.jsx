import HMS from '../assets/HMSHostLogo.png'
import home from '../assets/home.svg'
import shopping_cart from '../assets/shopping_cart.svg'
import world from '../assets/world.svg'
import Icon from '../components/Icon'


const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center lead fs-6 px-3 pt-1 z-1 bg-lightbg sticky-bottom border-top border-1 border-dark-subtle">
      <Icon dest="/" image={home} text="Home"/>
      <Icon dest="checkout" image={shopping_cart} text="Checkout"/>
      <Icon dest={null} image={world} text="Language"/>
      <a href="https://www.hmshost.com/">
        <img src={HMS} alt="HMSHost Logo" className="logo-img"/>
      </a>
    </div>
  )
}

export default Footer