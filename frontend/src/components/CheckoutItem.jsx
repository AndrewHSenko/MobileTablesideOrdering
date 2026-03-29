const CheckoutItem = ({ item }) => {
  return (
    <td className="align-start bg-lightbg py-1">
        <div className="d-flex flex-column align-items-start">
            <p className="fs-5">{item.title}</p>
            {item.options ? 
              <ul className="fs-6 text-dark-subtle pb-1">
                <li>{item.options.size}</li>
                <li>{item.options.pickle ? item.options.pickle : "No pickle"}</li>
              </ul>
              : ""
            }
        </div>
    </td>
    
  )
}

export default CheckoutItem