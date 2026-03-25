import { Container, Row, Col } from 'react-bootstrap'
import CatCard from '../components/CatCard'
import Reuben from '../assets/Reuben.png'
import CaesarSalad from '../assets/CaesarSalad.png'
import MatzoSoup from '../assets/MatzoSoup.png'
import Beverages from '../assets/Beverages.png'

const MainMenu = () => {
  return (
    <Container className="container-fluid my-2">
      <Row>
        <Col xs={6} md={4}>
          <CatCard image={Reuben} title="Popular"/>
          <CatCard image={CaesarSalad} title="Salads" />
          <CatCard image={Beverages} title="Beverages" />
        </Col>
        <Col xs={6} md={4}>
          <CatCard image={Reuben} title="Sandwiches" />
          <CatCard image={MatzoSoup} title="Sides" />
        </Col>
      </Row>
      
    </Container>
  )
}

export default MainMenu