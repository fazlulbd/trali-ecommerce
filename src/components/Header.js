import React from 'react'
import {Container, Navbar, Nav }from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import fackData from "../fackData/logoData"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

const Header = () => {
  const {totalQuantity} = useSelector(state => state.cart)
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to='/' as={Link}>
            <img src={fackData.img} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav className='navicon'>
             <Nav.Link href="#link"><BiUserCircle /></Nav.Link>
             <Nav.Link to='/cart' as={Link}><AiOutlineShoppingCart/><span>({totalQuantity})</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
