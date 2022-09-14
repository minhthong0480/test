import React from 'react';
import './styling/NavBar.css';

const NavBar = () => {
  return (
    <>
    {/*basic layout:*/}
    <header className='nav-box'>
      <nav className="navigation">
        <ul className="nav_links">
          <li><a href="#">Admission</a></li>
          <li><a href="#">Students</a></li>
          <li><a href="#">Teachers</a></li>
          <li><a href="#">Notices</a></li>
        </ul>
      </nav>
      <a className="roles" href="#"><button>Admin</button></a>
    </header>
    </>
  )
}

export default NavBar
