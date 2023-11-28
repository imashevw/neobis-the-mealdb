import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
      <div className='header sv-re'>
        <Link to={{ pathname: '/'}}>
          <h1 className='header__title'>The Meal</h1>
        </Link>
      </div>
    );
  }
  
export default Header;