import { Link } from 'react-router'
import toast from 'react-hot-toast'

/**
  <button onClick={() => toast.success("Success!")} className="card bg-amber-300!">Press here!</button>
  <button onClick={() => toast.error("Uh-oh!")} />
 */

const Order = () => {
  return (
    <div>
      <button type="button" className="btn btn-info">
        <Link to="/" className="text-gray-100!">Go Back</Link>
      </button>
    </div>
  )
}

export default Order