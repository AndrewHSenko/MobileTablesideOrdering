import HMS from '../assets/HMSHostLogo.png'
import Icon from '../components/Icon'
import home from '../assets/home.svg'
import shopping_cart from '../assets/shopping_cart.svg'
import world from '../assets/world.svg'

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center lead fs-6 px-3 pt-2 pb-1 bg-altblue sticky-bottom">
      <Icon dest="/" image={home} text="Home"/>
      <Icon dest="order" image={shopping_cart} text="Checkout"/>
      <Icon dest="" image={world} text="Language"/>
      <img src={HMS} alt="HMSHost Logo" className="logo-img"/>
    </div>
  )
}

export default Footer