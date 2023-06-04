import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import fackData from "../fackData/dealData"

const Deal = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(fackData)
    },[])
  return (
    <>
      <Container>
        <Row className='deal-item'>
            {
                data.map((item,index)=>(
                    <Col lg={6} key={item.id}>
                        <div className="deal-inner" style={{background: `url(${item.img})`}}>
                            <div className="deal-text">
                                <p>{item.subheading}</p>
                                <h3>{item.heading}</h3>
                                <button  className={`dealbtn${index}`}>{item.button}</button>
                            </div>
                        </div>
                    </Col>
                ))
            }
        </Row>
      </Container>
    </>
  )
}

export default Deal
