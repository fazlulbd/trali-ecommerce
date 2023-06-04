import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../redux/cartSlice'

const CartItem = (props) => {
    const data = props.item
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(+data.price * +data.quantity)
    const [quantity, setQuantity] = useState(data.quantity)
    const handleQuantity = (e)=>{
        let value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
        setQuantity(value)
    }
    const handleIncrement = ()=>{
        setQuantity(pre => pre + 1)
    }
    const handleDecrement = ()=>{
        if(quantity > 1){
            setQuantity(pre => pre - 1) 
        }
    }
    const handleRemove = (id)=>{
       dispatch(removeItem({id, quantity}))
    }
    useEffect(()=>{
        setTotalPrice(data.price * quantity)
        dispatch(updateQuantity({id: data.id, quantity}))
    },[quantity, data.price, data.id, dispatch])
  return (
    <>
       <div className="row">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={data.img}
                    className="w-100" alt="Blue Jeans Jacket" />
                </div>
            </div>
            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{data.name}</strong></p>
                <p>brand: {data.brand}</p>
                <p>price: {data.price}</p>
                <button  className="btn btn-danger btn-sm me-1 mb-2" onClick={()=>handleRemove(data.id)}> Remove </button>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                    <button className="px-3 me-2" onClick={handleDecrement}> - </button>
                    <div className="form-outline quantity">
                    <input id="form1"  name="quantity" value={quantity} type="number" className="form-control" onChange={handleQuantity}/>
                    </div>
                    <button className="px-3 ms-2" onClick={handleIncrement}> + </button>
                </div>
               <p className="text-start text-md-center"><strong>Tk: {totalPrice}</strong></p>
            </div>
            <hr className="my-4" />
        </div>
    </>
  )
}

export default CartItem
