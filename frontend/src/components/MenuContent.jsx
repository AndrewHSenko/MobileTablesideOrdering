import { Container, Row, Col } from 'react-bootstrap'
import { popularOptions } from '../options/popularOptions.js'
import MenuCard from './MenuCard'

const MenuContent = () => {
  const menuItems = popularOptions;

  return (
    <Container className="container-fluid">
        <Row>
          <Col lg={4} md={6}>
            {Object.values(menuItems).map((item) => (
              <MenuCard title={item.title} image={item.image} regPrice={item.regPrice} largePrice={item.largePrice} desc={item.desc}/>
            ))}
          </Col>
        </Row>
    </Container>
  )
}

export default MenuContent