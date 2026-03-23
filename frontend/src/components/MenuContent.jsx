import { Container, Row, Col } from 'react-bootstrap'
import MenuCard from './MenuCard'

const MenuContent = () => {
  return (
    <Container className="my-2">
        <Row>
          <Col lg={4} md={6}>
            <MenuCard />
          </Col>
          <Col lg={4} md={6}>
            <p>hi</p>
          </Col>
        </Row>
    </Container>
  )
}

export default MenuContent