import { Route, Routes } from 'react-router'
import toast from 'react-hot-toast'

// Import pages go here

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("Success!")} className="card bg-amber-300!">Press here!</button>
      <button onClick={() => toast.error("Uh-oh!")} />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  )
}

export default App 