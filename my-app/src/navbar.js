// Navbar.js

import React from 'react';

function Navbar() {
  const handleDropdownClick = () => {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src="logo.png" alt="Logo" style={{ height: '50px' }} />

      <div className="search-space">
        <i className="fa-solid fa-magnifying-glass fa-lg" style={{ color: '#ffffff' }}></i>
        <input type="text" style={{ width: '1000px', height: '35px', color: 'white' }} className="search" placeholder="Search"></input>
      </div>

      <div className="dropdown">
        <button className="dropbtn" onClick={handleDropdownClick}>Dropdown</button>
        <div className="dropdown-content" style={{ display: 'none' }}>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="login.js">Logout</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
