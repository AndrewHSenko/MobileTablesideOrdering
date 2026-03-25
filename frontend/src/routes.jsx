import Checkout from './pages/Checkout'
import MainMenu from './pages/MainMenu'
import Menu from './pages/Menu'
import NotFound from './pages/NotFound'

const routes = [
    {
        path: '/',
        index: true,
        element: <MainMenu />
    },
    {
        path: 'checkout',
        element: <Checkout />
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