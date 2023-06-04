import React, { useEffect, useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import fackData from '../fackData/productData'
import Product from './Product'
const Topproduct = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        setProduct(fackData)
    },[])
  return (
    <>
       <Container>
            <Row className='topproduct'>
                <Col className='topproduct-item' lg={6}>
                    Top Product
                </Col>
                <Col lg={6}>
                    <ul>
                        <li><a href="">All</a></li>
                        <li><a href="">Boys Collection</a></li>
                        <li><a href="">Girl Collection</a></li>
                        <li><a href="">Shose Collection</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                {
                    product.map(item=>(
                    <Col lg={3}>
                        <Product 
                               key = {item.id}
                                product = {item}    
                        />
                    </Col>
                    ))
                }
            </Row>
        </Container>
    </>
  )
}

export default Topproduct
