import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import {Alert} from 'react-bootstrap'
import { checkOut } from '../redux/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.cart)
  const cart = product.items
  let shipping = 0;
  if(product.total === 0){
      shipping = 0;
  }
  else if(product.total <200){
      shipping = 60;
  }
  else if(product.total >200){
      shipping = 50;
  }
  // console.log(cart)
  const handleChouckOut = (e)=>{
    dispatch(checkOut(e))
  }
  return (
    <>
      {
        cart && cart.length >0?(
          <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  <div className="card-body">
                     {
                      cart.map(item =>(
                        <CartItem
                          key ={item.id}
                          item = {item}
                        />
                      ))
                     }                 
                   
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>{product.total}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>{shipping}</span>
                      </li>
                      <li
                        className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span><strong>{product.total + shipping}</strong></span>
                      </li>
                    </ul>

                    <button className="btn btn-primary btn-lg btn-block" onClick={()=>handleChouckOut(product)}>
                      Go to checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )
        : (
          <Alert  variant='success' className='text-center'>
          <h2>Empty Cart</h2>
         </Alert>
        )
        
      }
     
    </>
  )
}

export default Cart
