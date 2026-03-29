import trashcan from "../assets/trashcan.png"
import { useCart } from "../layouts/CartContext"

const CheckoutQty = ({item}) => {
  const { increaseQty, decreaseQty, deleteItem } = useCart()

  return (
    <td className="text-center align-start d-flex justify-content-end gap-3 align-items-center bg-lightbg">
      <div className="d-flex justify-content-between align-items-center bg-dark-subtle rounded-pill fs-6 px-2">
        <button className="btn px-2" onClick={() => decreaseQty(item.id)}>-</button>
        <p className="px-3 bg-lightbg rounded-pill">{item.quantity}</p>
        <button className="btn px-2" onClick={() => increaseQty(item.id)}>+</button>
      </div>
      <img src={trashcan} alt="Trash" onClick={() => deleteItem(item.id)} className="img-fluid mb-1" style={{width: "1em", height: "1em"}}/>
    </td>
  )
}

export default CheckoutQty