import { Container, Row, Col } from 'react-bootstrap'
import MenuCard from './MenuCard'

import Reuben from '../assets/Reuben.png'
import PestoTomato from '../assets/PestoTomato.png'
import BLT from '../assets/BLT.png'

const MenuContent = () => {
  return (
    <Container className="container-fluid my-2">
        <Row>
          <Col lg={4} md={6}>
            <MenuCard title="Our Classic Reuben" image={Reuben} regPrice="$17.99" largePrice="$20.99"
              desc="Huey’s homestyle corned beef, Swiss Emmental cheese, The Brinery sauerkraut & our own Russian dressing on hand-sliced, grilled Jewish Rye bread from Huey's Bakehouse."
              hasSize={true} />
              <MenuCard title="The Humble BLT" image={BLT} regPrice="$14.99" largePrice="$16.99"
              desc="What's more to say? Nueske’s applewood-smoked bacon, baby gem leaf lettuce, local tomatoes & mayo on Jewish Rye bread from Huey's Bakehouse."
              hasSize={true} />
          </Col>
          <Col lg={4} md={6}>
            <MenuCard title="The Godfather's Mistress" image={PestoTomato} regPrice="$17.99" largePrice={false}
              desc="Fresh handmade mozzarella, tomatoes & basil pesto on grilled sourdough bread from Huey's Bakehouse."/>
          </Col>
        </Row>
    </Container>
  )
}

export default MenuContent