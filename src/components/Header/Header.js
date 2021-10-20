import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const {user,logOut}= useAuth();
    return (
        <div className="header-bg header-container">
          <div className="header container">
            <div className="row">
              <div className="col-md-2 p-2">
                <div >
                  <h2 className="text-danger">Eye Care</h2>
                  {/* <img  className="img-logo img-fluid "src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq_1-BDkgA2TCpZevIc6TxEiY79yGx16F_A&usqp=CAU" alt="" /> */}
                </div>
              </div>
              <div className="col-md-10">
                  <div className="menu-items">
                    <div className="d-flex justify-content-end align-items-end ">
                      <div>
                      <NavLink className="header-item"
  to="/home"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  Home
</NavLink>
      <NavLink className="header-item"
  to="/about"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  About
</NavLink>
      <NavLink className="header-item"
  to="/services"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
 Services
</NavLink>
      <NavLink className="header-item"
  to="/news"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
 News
</NavLink>
      <NavLink className="header-item"
  to="/contactUs"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
ContactUs
</NavLink>
 

      { user?.email  ?
       <Button onClick={logOut} variant="secondary">LogOut</Button> :
       
        <NavLink className="header-item"
    to="/login"
    activeStyle={{
    fontWeight: "bold",
      color: "red"
    }}
  >
  Login
</NavLink>}
                      </div>

                    </div>

                  </div>
              </div>
            </div>

          </div>
           
      {/* <NavLink
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
</NavLink>} */}
  <h3>{user?.displayName}</h3>
  <h4>{user?.email}</h4>
 
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