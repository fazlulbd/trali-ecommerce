import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Card, Row, Col, Button} from "react-bootstrap"
import { addToCart } from '../redux/cartSlice';
import { useDispatch} from 'react-redux'
const Product = (props) => {
  const product = props.product
  const dispatch =  useDispatch()
  const handleCart = (item)=>{
    dispatch(addToCart({
        ...item,
        quantity:1
    }))
  }
  return (
    <>
     <Card className='mt-5'>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
            <Row>
                <Col lg={6}>
                <ReactStars
                    count={5}
                    value={product.rating}
                    size={20}
                    activeColor="#ffd700"
                    isHalf={true}
                    edit = {false}
                />
                </Col>
                <Col lg={6} className='text-end'>
                    {product.brand}
                </Col>
            </Row>
          <Card.Title className='product-text'>{product.name}</Card.Title>
          <Card.Text className='product-price'>Tk: <span>{product.price}</span> </Card.Text>
        </Card.Body>
        <Card.Footer className='text-center'>
        <Button className='cart-button' onClick={()=>handleCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Product
