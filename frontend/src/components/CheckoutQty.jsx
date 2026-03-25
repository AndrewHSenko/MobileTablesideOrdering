// import trashcan from "../assets/trashcan.png"
// <img src={trashcan} alt="Trash" className="img-fluid" style={{width: "1.5em", height: "1.5em"}}/>
import { useCart } from "../layouts/CartContext"

const CheckoutQty = ({item}) => {
  const { increaseQty, decreaseQty } = useCart()

  return (
    <td className="text-center align-start">
      <div className="d-flex justify-content-between align-items-center bg-dark-subtle rounded-pill fs-6 px-2">
        <button className="btn px-2" onClick={() => decreaseQty(item.id)}>-</button>
        <p className="px-3 bg-lightbg rounded-pill">{item.quantity}</p>
        <button className="btn px-2" onClick={() => increaseQty(item.id)}>+</button>
      </div>
    </td>
  )
}

export default CheckoutQty