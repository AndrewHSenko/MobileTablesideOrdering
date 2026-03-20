import { Link } from 'react-router'

const Icon = ({dest, image, text}) => {
  return (
    <Link to={dest} className="d-flex flex-column align-items-center text-center link-underline-altblue text-black">
      <img src={image} alt={`${text} icon`} className="svg-icon" style={{"--icon-size" : "36px"}}/>
      <p className="mb-1 fs-6">{text}</p>
    </Link>
  )
}

export default Icon