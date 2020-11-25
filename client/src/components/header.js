import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import CartIcon from './cartIcon';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`header w-100 ${pathname !== '/' ? 'header--dark' : 'header--light'
        }`}
      id="home">
      <nav>
        <h1 className="header--logo">
          <Link
            to="/"
            className="text-light text-decoration-none"
            type="button">
            Shopie
        </Link>
        </h1>
        <ul>
          <li className="header--item">
            <p className="username text-light font-weight-bold h4 d-none">
              Hi, Samuel
            </p>
            <p className="auth text-light font-weight-bold h4">
              Log in / Sign up
            </p>
          </li>
          <li className="header--item header--cart">
            <CartIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
