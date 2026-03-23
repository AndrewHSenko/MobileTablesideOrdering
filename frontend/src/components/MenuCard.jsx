import { useState } from 'react'

const MenuCard = ({title, image, regPrice, largePrice, desc, hasSize}) => {
  const [selected, setSelected] = useState(false)

  return (
    <div className="my-2 mx-3">
        {/* Base Card */}
        <div className="card position-relative text-center text-decoration-none rounded-3" onClick={() => setSelected(true)}>
            <img src={image} className="card-img-top"/>  {/* alt={`${title} picture`} */} 
            <div className="d-flex justify-content-center gap-4 card-title px-3 my-2 mt-3">
                <h5 className="lead fs-6 align-content-center">{title}</h5>
                <h5 className="lead fs-6 align-content-center px-1">
                    {largePrice ? `${regPrice} / ${largePrice}` : regPrice}
                </h5>
            </div>
        </div>
        {/* Overlay Detail Card */}
        {selected && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center rounded-3 bg-dark bg-opacity-50 z-3"
                onClick={() => setSelected(false)}>
                <div
                    className="card p-3 mx-3"
                    onClick={(e) => e.stopPropagation()}> {/* Prevents accidental closing from touching */}
                    <h2 className="card-title text-center bg-primary bg-opacity-25 p-3 rounded-3 fst-italic">{title}</h2>
                    <img src={image} className="card-img-top"/>  {/* alt={`${title} picture`} */} 
                    <p className="card-body bg-lightbg bg-opacity-25 rounded-3 fs-6 my-1">
                        {desc}
                    </p>
                    {largePrice && (
                        <div className="d-flex flex-column gap-2 mt-2 mb-3">
                            <div className="d-flex justify-content-between form-check fs-6 mb-2 mx-2">
                                <div>
                                    <input className="form-check-input" type="radio" name="nosher" id="nosher" />
                                    <label className="form-check-label" htmlFor="nosher">
                                        Nosher (Regular)
                                    </label>
                                </div>
                                <p className="mb-0">{regPrice}</p>
                            </div>
                            <div className="d-flex justify-content-between form-check fs-6 mb-2 mx-2">
                                <div>
                                    <input className="form-check-input" type="radio" name="fresser" id="fresser" checked /> {/* Add onChange handler to decide what to Add to checkout list */}
                                    <label className="form-check-label" htmlFor="fresser">
                                        Fresser (Large)
                                    </label>
                                </div>
                                <p className="mb-0">{largePrice}</p>
                            </div>
                        </div>
                    )}
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-sm btn-primary" onClick={() => setSelected(false)}>Close</button>
                        <button className="btn btn-sm btn-success" onClick={() => setSelected(false)}>Add</button>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default MenuCard