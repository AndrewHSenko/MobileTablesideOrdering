import { Container, Row, Col } from 'react-bootstrap'
import CatScroll from "../components/CatScroll"

const FoodPage = () => {
  return (
    <div className="container-fluid mx-0 px-0">
      <CatScroll />
      <Container className="my-2">
        <Row>
          <Col xs={6} md={4}>
            <p>hi</p>
          </Col>
          <Col xs={6} md={4}>
            <p>hi</p>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default FoodPage