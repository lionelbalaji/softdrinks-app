import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import About from './About';
import '../css files/navbar.css'
const Navbar = () => {
  return (
    <>
       <div className="container-fluid navbar">
       <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <h4 className="navbar-brand" >Beverages</h4>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav hamb" >
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/about'>About</Link>
      </div>
    </div>
  </div>
</nav>
       </div>
    </>
  )
}

export default Navbar