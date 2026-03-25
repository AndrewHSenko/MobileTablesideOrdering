import { Route, Routes } from 'react-router'
import routes from './routes.jsx'
import { CartProvider } from './layouts/CartContext.jsx'
import MainLayout from './layouts/MainLayout'
import MainMenu from './pages/MainMenu'

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path = "/" element={<MainLayout />}>
          <Route index element={<MainMenu />}/>
          {routes.map((route, index) => (
            <Route 
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            />
            ))}
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App