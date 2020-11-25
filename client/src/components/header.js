import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import CartIcon from './cartIcon';

const Header = ({ logOut }) => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);

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
            {user ? (
              <>
                <p
                  onClick={logOut}
                  className="auth font-weight-bold h4 my-0 text-light d-inline-block ml-2">
                  Logout
              </p>
              </>
            ) :
              (<Link
                to="/auth"
                className="auth font-weight-bold h4 text-light text-decoration-none"
                type="button">
                Log in / Sign up
              </Link>
              )
            }
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
