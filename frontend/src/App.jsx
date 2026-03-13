import { Route, Routes } from 'react-router'

import MainLayout from './layouts/MainLayout'
import MainMenu from './pages/MainMenu'
import Order from './pages/Order'

const App = () => {
  return (
    <Routes>
      <Route path = "/" element={<MainLayout />}>
        <Route index element={<MainMenu />}/>
        <Route path="order" element={<Order />}/>
      </Route>
    </Routes>
  )
}

export default App 