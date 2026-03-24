import Order from './pages/Order'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'

const routes = [
    {
        index: true,
        element: <Menu />
    },
    {
        path: 'order',
        element: <Order />
    },
    {
        path: 'menu',
        element: <Menu />
    },
    {
        path: '*',
        element: <NotFound />
    }
]

export default routes