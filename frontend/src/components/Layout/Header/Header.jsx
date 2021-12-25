import React from 'react';
import HeaderSticky from './HeaderSticky';
import HeaderMain from './HeaderMain';
import HeaderSearch from './HeaderSearch';
import HeaderCart from './HeaderCart';
import HeaderTop from './HeaderTop';

function Header(props) {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderSticky>
        <div className="header__middle header__sticky">
          <div className="container">
            <div className="header__left">
              <a href="/" className="logo">
                <img src="images/logo.png" alt="Logo" />
              </a>

              <HeaderMain />
            </div>

            <div className="header__right">
              <HeaderSearch />

              <HeaderCart />
            </div>
          </div>
        </div>
      </HeaderSticky>
    </header>
  );
}

export default Header;
