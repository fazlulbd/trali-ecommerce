import React, { useEffect, useState } from 'react'
import {Carousel, } from 'react-bootstrap'
import fackData from "../fackData/bannerData" 
const Banner = () => {
    const [bann, setbann] = useState([])
    useEffect(()=>{
        setbann(fackData)  
    },[])
  return (
    <>
      <Carousel>
        {
            bann.map(item=>(
                <Carousel.Item interval={3000} key={item.id}>
                <div className="bann-slider" style={{background: `url(${item.img})`}}>
                  <div className="banner-text">
                    <p>{item.subheading}</p>
                    <h1>{item.heading}</h1>
                    <a href="#home">{item.button}</a>
                  </div>
                </div>
                </Carousel.Item>
            ))
        }
      </Carousel>
    </>
  )
}

export default Banner
