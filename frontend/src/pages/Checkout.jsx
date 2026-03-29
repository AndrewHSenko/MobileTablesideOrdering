import { useCart } from '../layouts/CartContext.jsx'
import { Link } from 'react-router'
import { Fragment } from 'react'
import CheckoutItem from '../components/CheckoutItem.jsx'
import CheckoutQty from '../components/CheckoutQty.jsx'

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart()
  return (
    <div class="container-fluid">
      <div className="d-flex flex-column justify-content-center rounded-3">
        <div className="d-flex flex-row justify-content-between align-items-end px-2 py-1 mt-3 mb-2">
          <h1 className="display-4 fw-bold text-secondary my-0 border-bottom border-primary">Your Order</h1>
          <Link to="/" className="lead fs-6 text-decoration-none text-info">Add items</Link>
        </div>
        <table className="table table-borderless rounded-3 mx-1">
          <tbody className="lead">
            {cart.length > 0 ? cart.map((item) => (
              <Fragment key={item.id}>
                <tr className="bg-lightbg">
                  <CheckoutItem item={item} />
                  <CheckoutQty item={item}/>
                </tr>
                <tr >
                  <td className="py-0 fs-6 bg-lightbg">{`$${(item.regPrice * item.quantity).toFixed(2)}`}</td>
                </tr>
              </Fragment>
              )) :
              <tr>
                <td className="display-5 text-center bg-lightbg">No items added</td>
              </tr>
            }
          </tbody>
        </table>
        <div className="d-flex flex-row justify-content-between align-items-end px-5 py-1 mt-3 mb-2">
          <p className="lead-4 fw-bold text-secondary">Total:</p>
          <p>{`$${cartTotal}`}</p>
        </div>
        <button className="btn btn-info text-light m-3" onClick={clearCart}>
          Order
        </button>
      </div>
    </div>
  )
}

export default Checkout

/**
 * <tr>
              <CheckoutItem name={"Caesar Salad"}/>
              <CheckoutQty />
            </tr>
            <tr>
              <td className="py-0 fs-6">$16.99</td>
            </tr>
            <tr>
              <CheckoutItem name={"Our Classic Reuben"}/>
              <CheckoutQty />
            </tr>
            <tr>
              <td className="py-0 fs-6">$16.99</td>
            </tr>
 */