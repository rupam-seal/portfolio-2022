import React from 'react';

const Menu = () => {
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeMenu() {
    document.getElementById('myNav').style.height = '0%';
  }
  return (
    <>
      {/* The overlay */}
      <div id="myNav" className="menu">
        <div className="menu__btn-container">
          <div className="topbar__logo-container">
            <img
              src=""
              id="menu-logo-icon"
              alt=""
              className="topbar__logo-img"
            />
            <span className="topbar__logo-txt">RupamSeal</span>
          </div>
          <button onClick={closeMenu} className="menu__menu-container">
            <span onClick={closeMenu} className="menu__menu-line"></span>
            <span onClick={closeMenu} className="menu__menu-txt">
              CLOSE
            </span>
          </button>
        </div>

        {/* Overlay content */}
        <div className="menu__list">
          <div className="menu__txt-container">
            <span className="menu__num">01</span>
            <a className="menu__txt" href="#">
              ABOUT
            </a>
            <div className="menu__line"></div>
          </div>
          <div className="menu__txt-container">
            <span className="menu__num">02</span>
            <a className="menu__txt" href="#">
              PROJECTS
            </a>
            <div className="menu__line"></div>
          </div>
          <div className="menu__txt-container">
            <span className="menu__num">03</span>
            <a className="menu__txt" href="#">
              SKILLS
            </a>
            <div className="menu__line"></div>
          </div>
          <div className="menu__txt-container">
            <span className="menu__num">04</span>
            <a className="menu__txt" href="#">
              CONTACT
            </a>
            <div className="menu__line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
