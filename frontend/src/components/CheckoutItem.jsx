const CheckoutItem = ({ name }) => {
  return (
    <td className="align-start">
        <div className="d-flex flex-column align-items-start">
            <p className="fs-5">{name}</p>
            <ul className="fs-6 text-dark-subtle">
                <li>Nosher</li>
                <li>No Pickle</li>
            </ul>
        </div>
    </td>
    
  )
}

export default CheckoutItem