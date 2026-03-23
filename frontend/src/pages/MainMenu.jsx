import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../components/CatCard'
import Reuben from '../assets/Reuben.png'

const MainMenu = () => {
  return (
    <Container className="container-fluid my-2">
      <Row>
        <Col xs={6} md={4}>
          <CatCard image={Reuben} title="Popular"/>
          <CatCard image={Reuben} title="Salads" />
        </Col>
        <Col xs={6} md={4}>
          <CatCard image={Reuben} title="Sandwiches" />
        </Col>
      </Row>
      
    </Container>
  )
}

export default MainMenu