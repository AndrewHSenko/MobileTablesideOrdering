import { Outlet } from 'react-router'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const MainLayout = () => {
  return (
    <div class="container-fluid bg-gray-200!">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout