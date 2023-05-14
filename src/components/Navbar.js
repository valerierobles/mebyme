import React from 'react';
import '../styles/Navbar.css';


const styles = {
  navbarStyle: {
    background: '#dc143c',
    justifyContent: 'flex-end',
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="/">My Portfolio</a>
    </nav>
  );
}

export default Navbar;