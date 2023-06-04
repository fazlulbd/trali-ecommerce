import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import fackData from '../fackData/productData'
import fackData1 from '../fackData/featureData'
import Product from './Product'
const Featuredproduct = () => {
    const [product, setProduct] = useState([])
    const [features, setFeature] = useState([])
    // useEffect(()=>{
    //     async function fetchProduct(){
    //       let {data} = await axios.get("http://localhost:8000/product")
    //       let feature = await axios.get("http://localhost:8000/feature")
    //       console.log(feature)
    //       setfeature(feature.data)
    //       let featureArray = []
    //       data.map((item)=>{
    //           // console.log(item.feature)
    //           if(item.feature){
    //               featureArray.push(item)
    //           }
    //       })
    //       setProduct(featureArray);
    //     }
    //     fetchProduct()
    //   },[])
    useEffect(()=>{
        setFeature(fackData1)
        setProduct(fackData)
        let featureArray = []
        fackData.map(item => {
            // console.log(item.feature)
            if(item.feature){
                featureArray.push(item)  
            }
                              
        })
        setProduct(featureArray);
    },[])
  return (
    <>
    <Container className='feature-item'>
      <Row className='topproduct'>
        <Col className='topproduct-item' lg={6}>
            Featured Collection
        </Col>
      </Row>
      <Row>
      {
          features.map(item =>(
            item.position === "top" &&
            <Col lg={4} key={item.id}>
                <div className="feature-inner" style={{background: `url(${item.img})`}}>
                    <div className="feture-text">
                        <h3>{item.heading}</h3>
                        <button  className='feature-btn'>{item.button}</button>
                        
                    </div>
                </div>
            </Col>
          ))
        }
        {
          product.map(item=>(
          <Col lg={4} key = {item.id}>
              <Product product={item}></Product>
          </Col>
          ))
        }
        {
          features.map(item =>(
            item.position === "bottom" &&
            <Col lg={4} key={item.id}>
                <div className="feature-inner" style={{background: `url(${item.img})`}}>
                    <div className="feture-text">
                        <h3>{item.heading}</h3>
                        <button  className='feature-btn'>{item.button}</button>
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

export default Featuredproduct
