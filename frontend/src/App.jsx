import { Route, Routes } from 'react-router'

import MainLayout from './layouts/MainLayout'
import MainMenu from './pages/MainMenu'
import Order from './pages/Order'
import Food from './pages/Food'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element={<MainLayout />}>
        <Route index element={<MainMenu />}/>
        <Route path="order" element={<Order />}/>
        <Route path="food" element={<Food />}/>
      </Route>
    </Routes>
  )
}

export default App 