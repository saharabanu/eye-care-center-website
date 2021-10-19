import React from 'react';
import { Button, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user,logOut}= useAuth();
    return (
        <div className="header-bg">
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Eye Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Stack direction="horizontal" gap={3}>
      <NavLink
  to="/home"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  Home
</NavLink>
      <NavLink
  to="/about"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  About
</NavLink>
      <NavLink
  to="/services"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
 Services
</NavLink>
      <NavLink
  to="/news"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
 News
</NavLink>
      <NavLink
  to="/contactUs"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
ContactUs
</NavLink>
      <NavLink
  to="/register"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
 Register
</NavLink>

      { user?.email  ?
       <Button onClick={logOut} variant="secondary">LogOut</Button> :
       
        <NavLink
    to="/login"
    activeStyle={{
    fontWeight: "bold",
      color: "red"
    }}
  >
  Login
</NavLink>}
  <h3>{user?.displayName}</h3>
  
</Stack>
    </Nav>
    
  </Navbar.Collapse>
</Navbar> 
            <div className="hero-image">
          <div className="hero-text">
            <h1 style={{fontSize:"4rem text-white"}}>Our Eye Care Center </h1>
            <p className="card-text fs-4 text-white">Primary eye care provides the patient with the first contact for eye care as well as a lifetime of continuing care.   </p>
            
          </div>
        </div>
              
        </div>
    );
};

export default Header;