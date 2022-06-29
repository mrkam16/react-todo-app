import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="logo__block">
            <a href="/"> Todo App </a>
          </div>
          <div className="navigation__block">
            <nav className="nav__list">
              <ul>
                <li className="nav__list__item">
                  <a href="https://github.com/mrkam16"> Back to GitHub </a>
                </li>
                <li className="nav__list__item">
                  <a href="https://vk.com/skodaplays"> Resume </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
