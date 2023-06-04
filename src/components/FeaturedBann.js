
import fackData from "../fackData/productbannData"
import { Container, Row, Col } from 'react-bootstrap'
const FeaturedBann = () => {
  return (
    <>
      <Container fluid>
        <div className="product-bann" style={{background: `url(${fackData.img})`}}>
            <Row>
                <Col md={{ span: 6, offset: 6 }}>  
                    <div className="banner-text">
                    <h1>{fackData.heading}</h1>
                    <a href="#home">{fackData.button}</a>
                    </div>
                </Col>
            </Row>
        </div>
      </Container>
    </>
  )
}

export default FeaturedBann
