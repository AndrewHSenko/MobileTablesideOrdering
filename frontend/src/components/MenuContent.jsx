import { Container, Row, Col } from 'react-bootstrap'
import MenuCard from './MenuCard'

import { popularOptions } from '../options/popularOptions.js'
import { sandwichOptions } from '../options/sandwichOptions.js'

const menuMap = {
  "popular" : popularOptions,
  "sandwiches" : sandwichOptions
}

const MenuContent = ({ activeMenu }) => {
  const menuItems = menuMap[activeMenu]

  return (
    <Container className="container-fluid">
        <Row>
          <Col lg={4} md={6}>
            {menuItems ? Object.values(menuItems).map((item) => (
              <MenuCard title={item.title} image={item.image} regPrice={item.regPrice} largePrice={item.largePrice} desc={item.desc}/>
            )) :
            <h5 className="lead p-2 bg-warning-subtle text-center">Unable to load menu. Please reload the page or check with your server.</h5>}
          </Col>
        </Row>
    </Container>
  )
}

export default MenuContent

/**
 * 
 */