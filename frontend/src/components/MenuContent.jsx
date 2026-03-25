import { Container, Row, Col } from 'react-bootstrap'
import MenuCard from './MenuCard'

import { popularOptions } from '../options/popularOptions.js'
import { sandwichOptions } from '../options/sandwichOptions.js'
import { saladOptions } from '../options/saladOptions.js'
import { sideOptions } from '../options/sideOptions.js'
import { beverageOptions } from '../options/beverageOptions.js'

const menuMap = {
  "popular" : popularOptions,
  "sandwiches" : sandwichOptions,
  "salads" : saladOptions,
  "sides" : sideOptions,
  "beverages" : beverageOptions
}

const MenuContent = ({ activeMenu }) => {
  const menuItems = menuMap[activeMenu]
  return (
    <Container className="container-fluid">
        <Row>
          <Col lg={4} md={6}>
            {menuItems ? Object.entries(menuItems).map(([key, item]) => (
              <MenuCard key={key} item={{...item, id: key}} />
            )) :
            <h5 className="lead p-2 bg-warning-subtle text-center">Unable to load menu. Please reload the page or check with your server.</h5>}
          </Col>
        </Row>
    </Container>
  )
}

export default MenuContent