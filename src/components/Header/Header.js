import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import HeaderLogo from './headerLogo.png';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../../firebase';

const Header = () => {

  const [navBar, setNavBar] = useState(false);

  const [{ cart, user }] = useStateValue();

  const showNavBar = () => setNavBar(!navBar);

  const onLogin = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__menu">
          <MenuIcon onClick={showNavBar} style={{cursor: 'pointer'}} />
        </div>
        <Link style={{textDecoration: 'none'}} to="/">
          {/* <img className="header__logo" src={HeaderLogo} /> */}
          <img className="header__logo" src="https://seeklogo.net/wp-content/uploads/2013/11/nike-swoosh-vector-logo-400x400.png"  alt="Nike logo" />
        </Link> 
        <div className="header__nav">
          <Link style={{textDecoration: 'none'}} to="/">
            <span className="header__navItems">Home</span>
          </Link>
          {/* <Link style={{textDecoration: 'none'}} to="/kids">
            <span className="header__navItems">Kids</span>
          </Link> */}
          <Link style={{textDecoration: 'none'}} to="/men">
            <span className="header__navItems">Men's Footwear</span>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/women">
            <span className="header__navItems">Women's Footwear</span>
          </Link>
        </div>
        <div className="header__navRight">
          <Link style={{textDecoration: 'none'}} to={!user && "/login"}>
            <div className="header__user" onClick={onLogin} >
              <span className="header__hello">Hello, <span className="header__mail">{user?.email}</span></span>
              <span className="header__navRightItems">{user ? 'Sign Out' : 'Log In/Sign Up'}</span>
            </div>
          </Link>
          {/* <Link style={{textDecoration: 'none'}} to="/login">
            <div className="header__user">
              <span className="header__hello">Hello, <span className="header__mail">abcabc@gmail.com</span></span>
              <span className="header__navRightItems">Log In/Sign Up</span>
            </div>
          </Link> */}
          {/* <Link style={{textDecoration: 'none'}} to="/login">
            <span className="header__navRightItems">Log In/Sign Up</span>
          </Link> */}
          <Link style={{textDecoration: 'none'}} to="/checkout">
            <ShoppingCartRoundedIcon className="header__cart" />
          </Link>
          <span className="header__cartItems">{cart?.length}</span>

        </div>
      </div>

      <div className={navBar ? 'header2 active' : 'header2'}>
            <div className="header2__close">
              <CloseIcon onClick={showNavBar} />
            </div>
            <div className="header2__nav">
              <Link style={{textDecoration: 'none'}} to={!user && "/login"}>
                <div className="header2__user" onClick={onLogin} >
                  <span className="header2__hello">Hello, <span className="header2__mail">{user?.email}</span></span>
                  <span className="header2__navSign">{user ? 'Sign Out' : 'Log In/Sign Up'}</span>
                </div>
              </Link>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/" onClick={showNavBar} >
                  <span className="header2__navItems">Home</span>
                </Link>
              </div>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/men" onClick={showNavBar} >
                  <span className="header2__navItems">Men's Footwear</span>
                </Link>
              </div>
              <div className="header2__navItem">
                <Link style={{textDecoration: 'none'}} to="/women" onClick={showNavBar} >
                  <span className="header2__navItems">Women's Footwear</span>
                </Link>
              </div>
            </div>
      </div>

    </>
  );
}

export default Header;