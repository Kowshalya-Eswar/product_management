import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import { FaCartArrowDown } from 'react-icons/fa';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch,useSelector } from "react-redux";
import { add } from '../store/searchSlice';

const Header = () => {
 let user = (localStorage.getItem('user-info')!=='' &&JSON.parse(localStorage.getItem('user-info')));
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const[search,setSearch] = useState('');
 const cartProducts = useSelector(state =>state.cart)
 
 const logout =()=>{
   localStorage.clear();
   navigate('/login');
 }

useEffect(()=>{
  dispatch(add(search))
},[search])

  return (
    <div>
       <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Nav.Link to="/" as={Link}>Shoper's stop</Nav.Link></Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper align-items-start">
            {
                localStorage.getItem('user-info')?
                <>
                    <Nav.Link to="/productList" as={Link}>Manage Product</Nav.Link>
                </>:
                <>
                    <Nav.Link to="/login" as={Link}>Login</Nav.Link>
                    <Nav.Link to="/register" as={Link}>Register</Nav.Link>
                </>
                
            }
            
          </Nav>
          <Nav className="me-auto nav_bar_wrapper align-items-end">
          <Form className="d-flex">
          <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value ={search}
              onChange={(e)=>{setSearch(e.target.value)}}
              // onBlur={()=>updateSearch(search)}
            />
          </Form>
          {user && user.name?
            <Nav>
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={()=>logout()}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>:
            <></>}
              <Nav.Link to="/cart" as={Link}><FaCartArrowDown/>{cartProducts.length}</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <br />
    </>
    </div>
  )
}

export default Header
