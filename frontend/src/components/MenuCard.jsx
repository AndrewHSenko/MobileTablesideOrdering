import { useState } from 'react'
import { useCart } from '../layouts/CartContext.jsx'

const MenuCard = ({ item }) => {
  const [selected, setSelected] = useState(false)
  const [size, setSize] = useState("Nosher")
  const { addToCart } = useCart()

  const changeSize = (new_size) => {
    setSize(new_size)
    item.options.size = new_size
  }

  return (
    <div className="mb-3 mx-3">
        {/* Base Card */}
        <div className="card text-center text-decoration-none rounded-3" onClick={() => setSelected(true)}>
            <img src={item.image} alt={`${item.title} picture`} className="card-img-top"/>
            <div className="d-flex justify-content-around gap-3 card-title px-2 my-0 mt-2">
                <h5 className="lead fs-6 align-content-center">{item.title}</h5>
                <h5 className="lead fs-6 align-content-center">
                    {item.largePrice ? `$${item.regPrice} / $${item.largePrice}` : `$${item.regPrice}`}
                </h5>
            </div>
        </div>
        {/* Overlay Detail Card */}
        {selected && (
            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 z-3"
                onClick={() => setSelected(false)}>
                <div
                    className="card rounded-4 p-3 mx-0 overflow-y-auto" style={{ maxHeight : "85vh", maxWidth : "98vw"}}
                    onClick={(e) => e.stopPropagation()}> {/* Prevents accidental closing from touching */}
                    <h2 className="card-title text-center bg-primary bg-opacity-25 p-3 rounded-3 fst-italic">{item.title}</h2>
                    <img src={item.image} alt={`${item.title} picture`} className="card-img-top"/>
                    <p className="card-body bg-lightbg bg-opacity-25 rounded-3 fs-6 my-1">
                        {item.desc}
                    </p>
                    <div className="d-flex flex-column gap-2 mt-2 mb-3">
                        <div className="d-flex justify-content-between form-check fs-6 mb-2 mx-2">
                            <div>
                                <input className="form-check-input" type="radio" id="Nosher" name="Nosher" value="Nosher" checked={size === "Nosher"} onChange={(e) => changeSize(e.target.value)}/>
                                <label className="form-check-label" htmlFor="Nosher">
                                    Nosher (Regular)
                                </label>
                            </div>
                            <p>${item.regPrice}</p>
                        </div>
                        {item.largePrice &&
                            <div className="d-flex justify-content-between form-check fs-6 mb-2 mx-2">
                                <div>
                                    <input className="form-check-input" type="radio" id="Fresser" name="Fresser" value="Fresser" checked={size === "Fresser"} onChange={(e) => changeSize(e.target.value)}/> {/* Add onChange handler to decide what to Add to checkout list */}
                                    <label className="form-check-label" htmlFor="Fresser">
                                        Fresser (Large)
                                    </label>
                                </div>
                                <p>${item.largePrice}</p>
                            </div>
                        }
                    </div>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-primary" onClick={() => setSelected(false)}>Close</button>
                        <button className="btn btn-sm btn-success" onClick={() => {addToCart(item); setSelected(false)}}>Add</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default MenuCard