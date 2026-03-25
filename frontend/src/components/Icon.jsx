import { useState } from 'react'
import { Link } from 'react-router'
import { Toast, ToastContainer } from 'react-bootstrap'

const Icon = ({dest, image, text}) => {
  const [showToast, setShowToast] = useState(false)

  return (
    <>
      <Link to={dest} onClick={() => {text === "Language" ? setShowToast(true) : null}} className="d-flex flex-column align-items-center text-center link-underline-altblue text-black">
        <img src={image} alt={`${text} icon`} className="svg-icon" style={{"--icon-size" : "36px"}}/>
        <p className="fs-6">{text}</p>
      </Link>
      <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 9999 }}>
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong className="me-auto">Huey's McSandwich Shop</strong>
            </Toast.Header>
            <Toast.Body>Feature coming soon!</Toast.Body>
          </Toast>
        </ToastContainer>
    </>
  )
}

export default Icon