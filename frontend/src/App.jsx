import { Route, Routes } from 'react-router'

import MainLayout from './layouts/MainLayout'
import MainMenu from './pages/MainMenu'
import Order from './pages/Order'
import Popular from './pages/Popular'
import Sandwiches from './pages/Sandwiches'
import Salads from './pages/Salads'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element={<MainLayout />}>
        <Route index element={<MainMenu />}/>
        <Route path="order" element={<Order />}/>
        <Route path="popular" element={<Popular />}/>
        <Route path="sandwiches" element={<Sandwiches />}/>
        <Route path="salads" element={<Salads />}/>
      </Route>
    </Routes>
  )
}

export default App 