import { useState } from 'react'

import Reuben from '../assets/Reuben.png'

const MenuCard = () => {
  const [selected, setSelected] = useState(false)

  return (
    <div>
        {/* Base Card */}
        <div className="card position-relative text-center text-decoration-none rounded-3" onClick={() => setSelected(true)}>
            <img src={Reuben} className="card-img-top"/>  {/* alt={`${title} picture`} */} 
            <div className="d-flex justify-content-center gap-4 card-title px-3 my-2 mt-3">
                <h5 className="lead fs-6 align-content-center">Our Classic Reuben</h5>
                <h5 className="lead fs-6 align-content-center px-1">$20.99</h5>
            </div>
        </div>
        {/* Overlay Detail Card */}
        {selected && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center rounded-3 bg-dark bg-opacity-50 z-3"
                onClick={() => setSelected(false)}>
                <div
                    className="card p-3 "
                    onClick={(e) => e.stopPropagation()}> {/* Prevents accidental closing from touching */}
                    <h2 className="card-title text-center bg-primary bg-opacity-25 p-3 rounded-3 fst-italic">Our Classic Reuben</h2>
                    <img src={Reuben} className="card-img-top"/>  {/* alt={`${title} picture`} */} 
                    <p className="card-body bg-lightbg bg-opacity-25 rounded-3 fs-6 my-1">
                        Huey’s homestyle corned beef, Swiss Emmental cheese, The Brinery sauerkraut & our own Russian dressing on hand-sliced, grilled Jewish Rye bread from Huey's Bakehouse.
                    </p>
                    <div className="d-flex flex-column gap-2 mt-2 mb-3">
                        <div class="form-check fs-6">
                            <input class="form-check-input" type="radio" name="nosher" id="nosher" />
                            <label class="form-check-label" for="nosher">
                                Nosher (Regular) +$18.99
                            </label>
                        </div>
                        <div class="form-check fs-6">
                            <input class="form-check-input" type="radio" name="fresser" id="fresser" checked />
                            <label class="form-check-label" for="fresser">
                                Fresser (Large) +$21.99
                            </label>
                        </div>
                    </div>
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